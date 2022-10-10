import { Component, OnInit } from '@angular/core';
import {mergeMap} from 'rxjs/operators';
import {TableInfo} from 'src/app/models/models';
import {Table, User} from 'src/app/models/RestModels';
import {SearchObject} from 'src/app/services/Rest';
import { BaseComponent } from '../base/base.component';

@Component({
	selector: 'app-tables',
	templateUrl: './tables.component.html',
	styleUrls: ['./tables.component.css']
})

export class TablesComponent extends BaseComponent implements OnInit 
{
	table_info_list:TableInfo[] = [];
	selected_table_info:TableInfo | null = null;
	show_orders:boolean = false;

	ngOnInit(): void 
	{
		this.route.paramMap.pipe
		(
			
			mergeMap(()=>
			{
				this.is_loading = true;

				let table_search:SearchObject<Table> = this.getEmptySearch();

				if( !(table_search.eq.store_id) )
				{
					let current_user = this.rest.current_user as User;
					table_search.eq.store_id = current_user.store_id;
				}
				
				return this.rest.table_info.search( table_search );
			})
		)
		.subscribe((response)=>
		{
			this.is_loading = false;
			this.table_info_list = response.data;
		},(error)=>this.showError(error));
	}

	showOrders(table_info:TableInfo)
	{
		this.selected_table_info = table_info;
		this.show_orders = true;
	}
}
