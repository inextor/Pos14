import { Component, OnInit } from '@angular/core';
import { SearchObject } from '../../services/Rest';
import { BaseComponent } from '../base/base.component';


import {Price_Type} from '../../models/RestModels';
import {ParamMap} from '@angular/router';


@Component({
	selector: 'app-list-price-type',
	templateUrl: './list-price-type.component.html',
	styleUrls: ['./list-price-type.component.css']
})

export class ListPriceTypeComponent extends BaseComponent implements OnInit {
	//file:File = null;
	show_import:boolean = false;
	price_type_search:SearchObject<Price_Type> = this.getEmptySearch();
	search_extra:Record<string,string> = { };
	price_type_list:Price_Type[] = [];

	ngOnInit()
	{
		this.path = '/list-price-type';

		this.subs.sink = this.route.queryParamMap.subscribe((queryParamMap:ParamMap) =>
		{
			let fields = [ "id","name","created","updated" ];
			let extra_keys:Array<string> = []; //['search_param1','project_id','some_id'];
			this.price_type_search = this.getSearch(queryParamMap, fields );

			this.titleService.setTitle('Tipos de consumo');

			this.price_type_search.limit = this.page_size;
			this.current_page = this.price_type_search.page;

			this.is_loading = true;
			this.subs.sink = this.rest.price_type.search( this.price_type_search )
			.subscribe((response)=>
			{
				this.setPages( this.price_type_search.page, response.total );
				this.price_type_list = response.data;
				this.is_loading = false;
			},(error)=>this.showError(error));

		});
	}
}
