import { Component, OnInit } from '@angular/core';
import { SearchObject } from '../../services/Rest';
import { BaseComponent } from '../base/base.component';


import {Store} from '../../models/RestModels';


@Component({
	selector: 'app-list-store',
	templateUrl: './list-store.component.html',
	styleUrls: ['./list-store.component.css']
})

export class ListStoreComponent extends BaseComponent implements OnInit {
	file:File  | null = null;
	show_import:boolean = false;
	store_search:SearchObject<Store> = this.getEmptySearch();
	store_list:Store[] = [];

	ngOnInit()
	{
		this.path = '/list-store';

		this.subs.sink = this.route.queryParamMap.subscribe((queryParamMap) =>
		{
			let fields = [ "id","organization_id","name","description","type","tax_percent","created_by_user_id","updated_by_user_id","created","updated" ];
			let extra_keys:Array<string> = []; //['search_param1','project_id','some_id'];
			this.store_search = this.getSearch(queryParamMap, fields,extra_keys );

			this.titleService.setTitle('Sucursales');

			this.current_page = this.store_search.page;
			this.is_loading = true;

			this.subs.sink = this.rest.store.search(this.store_search)
			.subscribe((response)=>
			{
				this.setPages( this.store_search.page, response.total );
				this.store_list = response.data;
				this.is_loading = false;
			},(error)=>this.showError(error));

		});
	}
}
