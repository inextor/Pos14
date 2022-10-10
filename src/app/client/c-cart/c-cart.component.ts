import { Component, OnInit } from '@angular/core';
import {forkJoin} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import { GetEmpty } from 'src/app/classes/GetEmpty';
import {OrderItemInfo} from 'src/app/models/models';
import {Platform_Address} from 'src/app/models/PlatformModels';
import {Order, Store, User} from 'src/app/models/RestModels';
import {BaseComponent} from 'src/app/pages/base/base.component';

@Component({
	selector: 'app-c-cart',
	templateUrl: './c-cart.component.html',
	styleUrls: ['./c-cart.component.css']
})
export class CCartComponent extends BaseComponent implements OnInit
{
	order_item_info_list:OrderItemInfo[] = [];
	platform_address_list:Platform_Address[] = [];
	platform_address:Platform_Address| null = null;
	store:Store = GetEmpty.store();
	show_delivery_address:boolean = false;
	price_by_option_group:Record<number,number> = {};
	show_select_store:boolean = false;
	store_list:Store[] = [];
	store_selected_id:number = 0;
	user:User = GetEmpty.user();

	total:number = 0;
	subtotal:number = 0;
	tax:number = 0;

	ngOnInit(): void
	{
		this.subs.sink = this.route.paramMap.pipe
		(
			mergeMap((response)=>
			{
				return forkJoin
				({
					address: this.rest.platform_address.search({limit:9999, nn:['lat','lng']}),
					order_items_info: this.rest.getCartItems(),
					store: this.rest.store.search({limit:9999,sort_order:['name_ASC']}),
					user: this.rest.user.get('me')
				});
			})
		).subscribe((response)=>
		{
			console.log('Init again');
			this.platform_address_list = response.address.data;
			this.store_selected_id = this.rest.getClientStoreId() || 0;
			this.store_list = response.store.data;
			this.user = response.user;

			if( !this.store_selected_id && this.store_list.length == 1 )
			{
				this.store_selected_id = this.store_list[0].id;
				this.store = this.store_list[0];
				this.rest.setClientStoreId( this.store_selected_id );
				console.log("Store id is by default", this.store_selected_id);
			}
			else
			{
				console.log('Store id is set', this.store_selected_id );
				this.store = this.store_list.find((store)=>store.id == this.store_selected_id ) as Store;
			}

			if( this.platform_address_list.length )
				this.platform_address = this.platform_address_list[0];

			this.order_item_info_list = response.order_items_info;
			this.updatePrices();
		})
	}

	removeCartItem(order_item_info:OrderItemInfo)
	{
		this.rest.removeCartItem(order_item_info).then((response)=>
		{
			this.showSuccess('Se eliminó el elemento del carrito');
			let index = this.order_item_info_list.findIndex(i=> i==order_item_info);

			if( index > -1 )
				this.order_item_info_list.splice(index,1);
		})
		.catch((error)=>
		{
			this.showError(error);
		})
	}

	showAddNewAddress()
	{
		this.show_delivery_address = true;
	}

	incremente(order_item_info:OrderItemInfo)
	{
		order_item_info.order_item.qty++;
		this.updatePrices()
	}

	decrement(order_item_info:OrderItemInfo)
	{
		if( order_item_info.order_item.qty > 1 )
			order_item_info.order_item.qty--;

		this.updatePrices()
	}

	updatePrices()
	{
		let f_list = this.rest.normalizarOrderItems(this.order_item_info_list);
		f_list.forEach(i=>this.rest.updateOrderItemPrice(i.order_item,this.store.tax_percent, 0 ));

		this.rest.updateCart(f_list)
		.then(()=>
		{
			console.log('Exito');
		},(error)=>console.log(error));

		for(let i in this.price_by_option_group)
		{
			this.price_by_option_group[ i ] = 0;
		}

		this.order_item_info_list.forEach(i=>
		{
			this.price_by_option_group[i.order_item.item_group] += i.order_item.total 
		});

		this.total = this.order_item_info_list.reduce((p,c)=>p+c.order_item.total,0);
		this.subtotal = this.order_item_info_list.reduce((p,c)=>p+c.order_item.subtotal,0);
		this.tax = this.order_item_info_list.reduce((p,c)=>p+c.order_item.tax,0);
	}

	//Esto esta mal con el sync_id
	createOrder()
	{
		if( this.platform_address == null )
		{
			this.show_delivery_address = true;
			return;
		}

		if( this.is_loading )
			return;

		if( this.store == null )
		{

		}

		let user = this.user;
		//let address:Platform_Address= this.platform_address as Platform_Address;
		let store:Store = this.store as Store;
		let version_created = this.rest.getVersion();

		let order_info = GetEmpty.orderInfo( this.rest );
		let order = order_info.order;

		order.tax_percent= store.tax_percent;
		order.client_user_id= user.id;
		order.price_type_id= user.price_type_id;
		order.store_id= store.id;
		order.lat= this.platform_address.lat;
		order.lng= this.platform_address.lng;
		order.service_type= 'TOGO';
		order.address= this.platform_address.address;
		order.total= this.total;
		order.subtotal= this.subtotal;
		order.tax= this.tax;
		order.client_name= user.name;
		order.version_created;


		this.is_loading = true;

		this.subs.sink = this.rest.user.get('me').pipe
		(
			mergeMap((response)=>
			{
				return this.rest.order_info.create({order,items:this.order_item_info_list})
			})
		)
		.subscribe((response)=>
		{
			this.is_loading = false;
			this.showSuccess('Tu orden fue registrada con exito');
			this.rest.sendNotification('order', response.order.id );
			this.rest.cleanCart().then(()=>{
			});

			console.log('Orden is', response.order.id );
			this.router.navigate(['/c-view-order', response.order.id]);
		},(error)=>this.showError(error));
	}
	changeAddress()
	{
		this.show_delivery_address = true;
	}

	onSelectDeliveryAddress(platform_address:Platform_Address| null )
	{
		this.platform_address = platform_address;
		this.show_delivery_address = false;
	}

	showStoreSelector()
	{
		this.subs.sink = this.rest.store.search({limit:99999, sort_order:['name_ASC']})
		.subscribe((response)=>
		{
			this.store_list = response.data;
			if( response.data.length  == 1)
			{
				this.store = response.data[0];
				this.rest.setClientStoreId(this.store.id);
			}
			else
			{
				this.show_select_store = true;
			}
		},(error)=>this.showError(error));
	}


	onStoreSelected()
	{
		this.rest.setClientStoreId(this.store_selected_id);
		this.show_select_store = false;
		this.router.navigate(['/c-select-category']);
	}
}
