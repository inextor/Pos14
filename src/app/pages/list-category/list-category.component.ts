import { Component, OnInit } from '@angular/core';
import { SearchObject } from '../../services/Rest';
import { BaseComponent } from '../base/base.component';
import { forkJoin,Subject } from 'rxjs';


import {Category, Store} from '../../models/RestModels';
import {ParamMap} from '@angular/router';
import {debounceTime} from 'rxjs/operators';


@Component({
	selector: 'app-list-category',
	templateUrl: './list-category.component.html',
	styleUrls: ['./list-category.component.css']
})

export class ListCategoryComponent extends BaseComponent implements OnInit {
	//file:File = null;
	show_import:boolean = false;
	search_subject = new Subject<string>();
	category_search:SearchObject<Category> = this.getEmptySearch();
	category_list:Category[] = [];

	datos_por_category:Record<string,any> = {};
	store_list:Store[] = [];
	category_seleccionada:Category | null= null;
	type:string = 'PRODUCT';

	ngOnInit()
	{
		this.path = '/list-category';

		this.subs.sink = this.route.queryParamMap
		.subscribe((queryParamMap:ParamMap) =>
		{
			let fields = [ "id","image_id","name","created_by_user_id","updated_by_user_id","codigo","description","presentacion","created","updated" ];

			this.type = this.route.snapshot.params['type'] || 'PRODUCT';

			let extra_keys:Array<string> = ['parent_category_id']; //['search_param1','project_id','some_id'];
			this.category_search = this.getSearch(queryParamMap, fields, extra_keys );
			this.titleService.setTitle('Categorias');

			this.is_loading = true;
			this.category_search.limit = this.page_size;
			this.current_page = this.category_search.page;
			this.category_search.eq.type = this.type;
			this.category_search.sort_order= ['name_ASC'];

			this.is_loading = true;
			this.subs.sink = forkJoin
			({
				category: this.rest.category.search(this.category_search),
				store: this.rest.store.search({limit:99999,sort_order:['name_ASC']})
			})
			.subscribe((responses)=>
			{
				this.store_list = responses.store.data;
				this.category_list = responses.category.data;
				this.setPages( this.category_search.page, responses.category.total );
				this.is_loading = false;
			},(error)=>this.showError(error));
		});

		this.subs.sink = this.search_subject.pipe
		(
			debounceTime(300)
		)
		.subscribe((search:string)=>
		{
			console.log( search );
			this.category_search.lk.name = search;
			this.category_search.page = 0;
			this.searchNoForceReload( this.category_search );
		},(error)=>this.showError(error));
	}

	onSearch(evt:any)
	{
		let search: string = evt.target.value;

		this.search_subject.next(search);
	}


	deleteCategory(category:Category)
	{
		this.subs.sink = this.confirmation.showConfirmAlert
		(
			category,
			'Eliminar Categoría',
			'¿Esta seguro de eliminar la categoria "'+category.name+'"?'
		)
		.subscribe((response) =>
		{
			if( response.accepted )
			{
				this.subs.sink = this.rest.category
				.delete( response.obj )
				.subscribe((_response)=>
				{
					this.showSuccess('categoria eliminada');
					let index = this.category_list.findIndex(i=>i.id == category.id);
					if( index > -1 )
					{
						this.category_list.splice(index,1);
					}
				},(error)=>this.showError(error));
			}
		},(error)=>{
			this.showError(error);
		});
	}
}
