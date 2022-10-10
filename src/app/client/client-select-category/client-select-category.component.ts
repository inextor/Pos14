import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import { OrderItemInfo } from 'src/app/models/models';
import {Category} from 'src/app/models/RestModels';
import {BaseComponent} from 'src/app/pages/base/base.component';

@Component({
	selector: 'app-client-select-category',
	templateUrl: './client-select-category.component.html',
	styleUrls: ['./client-select-category.component.css']
})
export class ClientSelectCategoryComponent extends BaseComponent
{
	category_list:Category[] = [];
	cart_items: number = 0;

	ngOnInit(): void
	{
		this.subs.sink = this.route.paramMap.pipe
		(
			mergeMap((_paramMap)=>
			{
				return forkJoin
				({
					category: this.rest.category.search
					({
						limit:9999999,
						eq:{display_status:'NORMAL'},
						sort_order:['name_ASC']
					})
					,cart_items: this.rest.getCartItems()
				});
			})
		)
		.subscribe((response)=>
		{
			this.category_list = response.category.data;
			this.updateQty( response.cart_items );
		})
	}

	updateQty(oiia:OrderItemInfo[])
	{
		let qty = oiia.reduce((p,oii)=>{
			return p +( oii.order_item.item_option_id ? 0 : oii.order_item.qty );
		},0);
		this.cart_items = qty;
	}
}
