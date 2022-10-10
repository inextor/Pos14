import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import {ItemInfo} from 'src/app/models/models';
import {Category} from 'src/app/models/RestModels';
import {BaseComponent} from 'src/app/pages/base/base.component';
import { of,forkJoin } from 'rxjs';
//import {RestResponse} from 'src/app/services/Rest';

@Component({
	selector: 'app-item-selector',
	templateUrl: './item-selector.component.html',
	styleUrls: ['./item-selector.component.css']
})

export class ItemSelectorComponent extends BaseComponent implements OnInit
{
	@Output() onItemSelect:EventEmitter<ItemInfo> =new EventEmitter<ItemInfo>();
	current_path:string = '';
	categories_path:Category[] = [];
	category_list:Category[] = [];
	item_info_list:ItemInfo[] = [];
	display_list:'Category'|'Item' = 'Category';
	//@Input() offline_search:boolean = false;

	ngOnInit(): void
	{
		this.loadCategoriesAndItems(0);
	}

	onCategorySelected(category:Category)
	{
		this.categories_path.push( category )
		this.loadCategoriesAndItems( category.id );
		//if( this.rest.is_offline )
		//{
		//	this.subs.sink = this.rest
		//	.getOfflineItemsByCategory( category.id )
		//	.subscribe((items)=>{
		//		this.item_info_list = items;
		//		this.display_list = 'Item';
		//		console.log('Pero que pedo en items',items);
		//	},(error)=>this.showError(error));
		//}
		//else
		//{
		//	this.subs.sink = this.rest.item_info
		//	.search({eq:{ category_id:category.id, on_sale:'YES', status:'ACTIVE'}, limit:999999,sort_order:['name_ASC']})
		//	.subscribe((response)=>
		//	{
		//		this.item_info_list = response.data;
		//		this.display_list = 'Item';
		//	},(error)=>this.showError(error))
		//}
	}

	loadCategoriesAndItems(category_id:number):void
	{
		this.category_list.splice(0,this.category_list.length);
		this.item_info_list.splice(0,this.category_list.length);

		if( this.rest.offline_search_enabled || this.rest.is_offline )
		{
			console.log('Obteniendo las categorias');
			this.rest.getOfflineCategoriesAndItems( category_id )
			.then((response)=>
			{
				console.log('LLegaron ', response);

				this.category_list = response.category as Category[];
				this.item_info_list = response.item_info as ItemInfo[];
			});
		}
		else
		{
			let data:ItemInfo[] = [];
			let item_obs = category_id == 0
				? of({total:0,data})
				: this.rest.item_info.search
				({
					eq:{ category_id, on_sale:'YES', status:'ACTIVE' },
					search_extra: { store_id: this.rest.current_user?.store_id || '' },
					limit:999999,
					sort_order:['name_ASC']
				});

			this.subs.sink = forkJoin
			({
				item_info : item_obs,
				category: this.rest.category.search
				({
					eq:{ display_status:'NORMAL' },
					search_extra:{parent_category_id:category_id},
					limit:999999,
					sort_order:['name_ASC']
				})
			}).subscribe((response)=>
			{
				//this.category_list.splice(0,this.category_list.length, ...response.category.data );
				//this.item_info_list.splice(0,this.category_list.length, ...response.item_info.data );
				this.category_list = response.category.data;
				this.item_info_list = response.item_info.data;
			},(error)=>this.showError(error));
		}
	}

	onItemClicked(item:ItemInfo)
	{
		console.log('Emiting item',item);
		this.onItemSelect.emit(item);
	}

	clean()
	{
		this.item_info_list = [];
		this.display_list = 'Category';
	}

	fullBack()
	{
		this.categories_path.splice(0,this.categories_path.length);
		this.loadCategoriesAndItems(0)
	}

	goBack()
	{
		this.categories_path.pop();
		let category_id = this.categories_path.length ? this.categories_path[ this.categories_path.length - 1].id : 0;
		console.log('Back to ', category_id, this.categories_path.length )
		this.loadCategoriesAndItems( category_id );
	}
}
