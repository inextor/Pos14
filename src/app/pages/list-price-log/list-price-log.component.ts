import { Component, OnInit } from '@angular/core';
import { SearchObject } from '../../services/Rest';
import { BaseComponent } from '../base/base.component';
import { forkJoin } from 'rxjs';

import {Price_List, Price_Log, Price_Type, User} from '../../models/RestModels';
import {Item} from '../../models/RestModels';
import { PriceLogInfo } from 'src/app/models/models';


@Component({
	selector: 'app-list-price-log',
	templateUrl: './list-price-log.component.html',
	styleUrls: ['./list-price-log.component.css']
})

export class ListPriceLogComponent extends BaseComponent implements OnInit {
	file:File | null = null;
	show_import:boolean = false;
	price_log_search:SearchObject<Price_Log> = this.getEmptySearch();
	price_log_list:PriceLogInfo[] = [];
	price_list_list:Price_List[] = [];
	price_type_list:Price_Type[] = [];
	
	item_list:Item[] = [];
	user_list:User[] = [];

	ngOnInit()
	{
		this.path = '/list-price-log';

		this.subs.sink = this.route.queryParamMap.subscribe((queryParamMap) =>
		{
			let fields = [ "id","item_id","price_type_id","price_list_id","tax_included","old_tax_included","old_price","new_price","created_by_user_id","created","updated" ];
			let extra_keys:Array<string> = []; //['search_param1','project_id','some_id'];
			this.price_log_search = this.getSearch(queryParamMap, fields, extra_keys );
			this.price_log_search.sort_order = ['id_DESC'];
			this.titleService.setTitle('price_log');
			this.is_loading = true;

			
			this.is_loading = true;
			this.subs.sink = forkJoin({
				price_log : this.rest.price_log.search(this.price_log_search),
				item : this.rest.item.search({limit:9999}),
				user: this.rest.user.search({limit:9999,eq:{ type:'USER'}}),
				price_list: this.rest.price_list.search({limit:9999,sort_order:['name_ASC']}),
				price_type: this.rest.price_type.search({limit:9999,sort_order:['name_ASC']})
			})
			.subscribe((responses)=>
			{
				this.user_list = responses.user.data;
				this.price_list_list = responses.price_list.data;
				this.price_type_list = responses.price_type.data;
				this.price_log_list = responses.price_log.data;

				this.setPages( this.price_log_search.page, responses.price_log.total );
				this.is_loading = false;
			},(error)=>this.showError(error));
		});
	}

}
