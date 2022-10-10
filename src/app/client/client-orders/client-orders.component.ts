import { Component } from '@angular/core';
import {mergeMap} from 'rxjs/operators';
import {OrderInfo} from 'src/app/models/models';
import {Store} from 'src/app/models/RestModels';
import {BaseComponent} from 'src/app/pages/base/base.component';

@Component({
	selector: 'app-client-orders',
	templateUrl: './client-orders.component.html',
	styleUrls: ['./client-orders.component.css']
})
export class ClientOrdersComponent extends BaseComponent
{
	order_info_list:OrderInfo[] = [];
	store_list:Store[] = [];
	show_select_store:boolean = false;
	store_selected_id:number = this.rest.getClientStoreId() as number;

	ngOnInit(): void
	{
		this.subs.sink = this.route.paramMap.pipe
		(
			mergeMap(()=>
			{
				this.store_selected_id  = this.rest.getClientStoreId() as number;

				return 	this.rest.order_info.search({ limit:99999, sort_order:['id_DESC'] });
			})
		)
		.subscribe((response)=>
		{
			this.order_info_list = response.data;
		});
	}

	onStoreSelected(store_id:number)
	{
		this.rest.setClientStoreId(store_id)
		this.show_select_store = false;
		this.rest.setClientStoreId(store_id);
		this.router.navigate(['/c-select-category']);
	}

	showStoreSelector()
	{
		this.subs.sink = this.rest.store.search({limit:99999, sort_order:['name_ASC']})
		.subscribe((response)=>
		{
			this.store_list = response.data;
			this.show_select_store = true;
		},(error)=>this.showError(error));
	}
}

