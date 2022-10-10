import { Component, OnInit } from '@angular/core';
import { SearchObject } from '../../services/Rest';
import { BaseComponent } from '../base/base.component';

import {Price_List} from '../../models/RestModels';


@Component({
	selector: 'app-list-price-list',
	templateUrl: './list-price-list.component.html',
	styleUrls: ['./list-price-list.component.css']
})

export class ListPriceListComponent extends BaseComponent implements OnInit {
	//file:File = null;
	show_import:boolean = false;
	price_list_search:SearchObject<Price_List> = this.getEmptySearch();
	price_list_list:Price_List[] = [];
	show_copy_prices:boolean = false;
	selected_price_list: Price_List | null = null;

	ngOnInit()
	{
		this.path = '/list-price-list';

		this.subs.sink = this.route.queryParamMap.subscribe((queryParamMap) =>
		{
			let fields = [ "id","name","created","updated","created_by_user_id","updated_by_user_id" ];
			let extra_keys:Array<string> = []; //['search_param1','project_id','some_id'];
			this.price_list_search = this.getSearch(queryParamMap, fields,extra_keys );

			this.titleService.setTitle('Lista de precios');
			this.is_loading = true;
			this.current_page = this.price_list_search.page;

			this.subs.sink = this.rest.price_list.search(this.price_list_search)
			.subscribe((response)=>
			{
				this.setPages( this.price_list_search.page, response.total );
				this.price_list_list = response.data;
				this.is_loading = false;
			},(error)=>this.showError(error));

		});
	}

	showCopyPrices(price_list:Price_List)
	{
		this.selected_price_list = price_list;
		this.show_copy_prices = true;
	}
}
