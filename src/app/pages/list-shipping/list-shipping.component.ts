import { Component, OnInit } from '@angular/core';
import {ParamMap} from '@angular/router';
import {forkJoin} from 'rxjs';
import {BoxContentInfo, BoxInfo, ShippingItemInfo, ShippingInfo} from 'src/app/models/models';
import {Item, Shipping, Store} from 'src/app/models/RestModels';
import {SearchObject} from 'src/app/services/Rest';
import {BaseComponent} from '../base/base.component';

@Component({
	selector: 'app-list-shipping',
	templateUrl: './list-shipping.component.html',
	styleUrls: ['./list-shipping.component.css']
})
export class ListShippingComponent extends BaseComponent implements OnInit {
	//file:File = null;
	show_import:boolean = false;
	shipping_search:SearchObject<Shipping> = this.getEmptySearch()
	search_extra:Record<string,string> = { };
	shipping_info_list:ShippingInfo[] = [];

	store_list:Store[] = [];
	selected_category:number | null = null;
	item_list:Item[] = [];
	type:string = '';

	store_dictionary:Record<number,Store> = {};
	qty_by_shipping:Record<number,number> = {};
	boxes_by_shipping:Record<number,number> = {};

	ngOnInit()
	{
		this.path = '/list-shipping';

		this.subs.sink = this.route.paramMap.subscribe((paramMap)=>{
			this.type = paramMap.get('type') || ''; 
		});

		this.subs.sink = this.route.queryParamMap.subscribe((queryParamMap:ParamMap) =>
		{
			let fields = [ "id","shipping_guide","shipping_company","requisition_id","status","from_store_id","to_store_id","date","received_by_user_id","delivery_datetime","created_by_user_id","updated_by_user_id","created","updated" ];
			this.shipping_search = this.getSearch(queryParamMap, fields );
			this.shipping_search.sort_order=['id_DESC'];
			this.titleService.setTitle('Traspasos');
			this.is_loading = true;

			this.subs.sink = forkJoin
			({
				shipping : this.rest.shipping_info.search(this.shipping_search),
				store: this.rest.store.search({limit:99999, csv:{status:["ACTIVE","DISABLED"]}, sort_order:['name_ASC']})
			})
			.subscribe((responses)=>
			{
				//responses.items.data.forEach(i=>this.item_dictionary[i.id]=i);
				//responses.category.data.forEach(c=>this.category_dictionary[c.id]=c);
				responses.store.data.forEach(c=>this.store_dictionary[c.id]=c);

				responses.shipping.data.forEach((shipping_info:ShippingInfo)=>
				{
					this.qty_by_shipping[ shipping_info.shipping.id ] = 0;
					this.boxes_by_shipping[ shipping_info.shipping.id ] = 0;

					shipping_info.items.forEach((sii:ShippingItemInfo)=>
					{
						if( sii.pallet_info )
						{
							sii.pallet_info.content.forEach((bi:BoxInfo)=>
							{
								bi.content.forEach((bci:BoxContentInfo)=>
								{
									this.qty_by_shipping[ shipping_info.shipping.id ] += bci.box_content.qty;
									this.boxes_by_shipping[ shipping_info.shipping.id ]++;
								});
							})
						}
						else if( sii.box_info )
						{
							sii.box_info.content.forEach((bci:BoxContentInfo)=>
							{
								this.qty_by_shipping[ shipping_info.shipping.id ] += bci.box_content.qty;
								this.boxes_by_shipping[ shipping_info.shipping.id ]++;
							});
						}
						else  if( sii.shipping_item.item_id )
						{
							this.qty_by_shipping[ shipping_info.shipping.id ] += sii.shipping_item.qty;
						}
					});
				});


				this.shipping_info_list = responses.shipping.data;
				this.setPages( this.shipping_search.page, responses.shipping.total );
				this.store_list = responses.store.data;
				this.is_loading = false;
			},(error)=>this.showError(error));
		});
	}

	confirmSendShipping(shipping:Shipping)
	{
		let time = Date.now();

		this.subs.sink = this.confirmation
		.showConfirmAlert(shipping,"Desea marcar como enviado",'')
		.subscribe((response)=>{
			if( response.accepted )
			{
				this.subs.sink = this.rest.update
				(
					'markShippingAsSent',
					{shipping_id:shipping.id}
				)
				.subscribe((response:any)=>
				{
					//XXX modificacion que posiblement true
					let s = this.shipping_info_list.find(i=>i.shipping.id == response.id ) as ShippingInfo;
					s.shipping = response;

					this.showSuccess('La informacion se guardo exitosamente');
				},(error)=>this.showError(error));
			}
		},(error)=>
		{
			this.showError(error);
		});
	}

	/*
	onFileChanged(event:any)
	{
		if (event.target.files.length)
		{
			this.file = event.target.files[0];
		}
	}
	*/

	updateValues():void
	{
		let counter:Record<number,number> = {};
	}

	cancelShipping(shipping_info:ShippingInfo)
	{
		this.subs.sink = this.confirmation
		.showConfirmAlert(shipping_info,"Eliminar Envio","Esta seguro de eliminar el envio?" )
		.subscribe((response)=>
		{
			if( response.accepted )
			{
				this.subs.sink = this.rest.update
				(
					'cancelShipping', {shipping_id:shipping_info.shipping.id}
				)
				.subscribe((response:any)=>
				{
					shipping_info.shipping.status = 'CANCELLED';
					this.showSuccess('El envio se elimino exitosamente');
				},(error)=>this.showError(error));
			}
		},(error)=>
		{
			this.showError(error);
		});
	}
}
