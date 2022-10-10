import { Component } from '@angular/core';
import {forkJoin} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import { GetEmpty } from 'src/app/classes/GetEmpty';
import {ItemInfo, OrderItemInfo} from 'src/app/models/models';
import {Category, Price, Store} from 'src/app/models/RestModels';
import {BaseComponent} from 'src/app/pages/base/base.component';

@Component({
	selector: 'app-client-select-category-item',
	templateUrl: './client-select-category-item.component.html',
	styleUrls: ['./client-select-category-item.component.css']
})

export class ClientSelectCategoryItemComponent extends BaseComponent
{
	item_info_list: ItemInfo[] = [];
	category: Category = GetEmpty.category();
	store:Store = GetEmpty.store();
	store_id:number = this.rest.getClientStoreId() as number;
	cart_items:number = 0;

	ngOnInit(): void
	{
		this.subs.sink = this.route.paramMap.pipe
		(
			mergeMap((paramMap)=>
			{
				let category_id = parseInt( paramMap.get('category_id' ) as string ) as number;
				this.store_id = this.rest.getClientStoreId() as number;
				this.is_loading = true;

				return forkJoin
				({
					category: this.rest.category.get( paramMap.get('category_id') ),
					item_info: this.rest.item_info.search({eq:{category_id,on_sale:'YES',status:'ACTIVE'}, limit:999999,sort_order:['name_ASC']}),
					store: this.rest.store.get( this.store_id ),
					user: this.rest.user.get('me'),
					cart_items: this.rest.getCartItems()
				});
			})
		).subscribe((response)=>
		{
			this.store = response.store;
			this.category = response.category;

			response.item_info.data.forEach((item_info)=>
			{
				item_info.price = item_info.prices.find((price:Price)=>
				{
					return price.price_list_id	== this.store.price_list_id && price.price_type_id == response.user.price_type_id;
				})
			});

			this.is_loading = false;
			//this.cart_items = response.cart_items.length;
			this.item_info_list = response.item_info.data;
			this.updateQty( response.cart_items );
		});
	}

	addItemToCart(item_info:ItemInfo)
	{
		this.rest.getCartItems()
		.then((order_item_info_array:OrderItemInfo[])=>
		{
			let oii = order_item_info_array.find((i)=>i.order_item.item_id == item_info.item.id );


			if( oii )
			{
				oii.order_item.qty++;
				let f_list = this.rest.normalizarOrderItems(order_item_info_array);
				f_list.forEach(i=>this.rest.updateOrderItemPrice(i.order_item,this.store.tax_percent, 0 ));

				return this.rest.updateCart(f_list)
			}

			if(!( item_info.price ))
			{
				this.showError('El artículo no tiene un precio, por favor intente con otro articulo');
				return;
			}

			let order_item_info:OrderItemInfo = {
				order_item: {
					item_id: item_info.item.id,
					qty:1,
					item_group: Date.now(),
					original_unitary_price:item_info.price.price,
					tax_included: item_info.price.tax_included,
					price_id: item_info.price.id
				},
				item: item_info.item,
				category: item_info.category,
				prices: item_info.prices,
				price: item_info.price,
				created: new Date()
			} as OrderItemInfo;

			return this.rest.addOrderItemsToCart([order_item_info])
		})
		.then(()=>
		{
			this.showSuccess('El artículo se guardó exitosamente en el carrito');
			return this.rest.getCartItems()
		})
		.then((response)=>
		{
			this.updateQty( response );
		})
		.catch((error)=>this.showError(error));
	}

	updateQty(oiia:OrderItemInfo[])
	{
		let qty = oiia.reduce((p,oii)=>{
			return p +( oii.order_item.item_option_id ? 0 : oii.order_item.qty );
		},0);
		this.cart_items = qty; 

	}
}
