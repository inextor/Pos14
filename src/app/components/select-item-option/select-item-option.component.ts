import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import { Component, Input, OnInit, Output,EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import {Subscription} from 'rxjs';
import { GetEmpty } from 'src/app/classes/GetEmpty';
import {KeyboardShortcutEvent} from 'src/app/classes/Utils';
import {ItemInfo, ItemOptionInfo, ItemOptionValueInfo, OrderItemInfo} from 'src/app/models/models';
import {Order_Item, Price, User} from 'src/app/models/RestModels';
import {BaseComponent} from 'src/app/pages/base/base.component';
import {ShortcutsService} from 'src/app/services/shortcuts.service';

interface Qty {
	item_option_value_id:number;
	qty:number;
}

@Component({
	selector: 'app-select-item-option',
	templateUrl: './select-item-option.component.html',
	styleUrls: ['./select-item-option.component.css']
})
export class SelectItemOptionComponent extends BaseComponent implements OnInit,OnChanges
{
	@Input() item_info:ItemInfo = GetEmpty.itemInfo();
	@Output() orderItemInfoList = new EventEmitter<OrderItemInfo[]>();

	@Input() price_list_id:number | null = null;
	@Input() price_type_id:number = 1;
	@Input() tax_percent:number = 0;

	option_index: number	= 0;

	//lleva el contador de la cantidad de opciones seleccionadas
	option_dictionary:Record<number,number> = {};

	//Lleva el contador de
	//option_qty_dictionary:Record<number,number> = {};

	row_index: number = 0;
	keyboard_subscription: Subscription | null = null;
	item_focus_index:number = 0;
	item_option_values_queue_by_item_option_id:Record<number,Qty[]> = {}

	@ViewChild(CdkVirtualScrollViewport) option_view_port!: CdkVirtualScrollViewport;

	ngOnInit(): void
	{
		this.option_index = 0;
		this.option_dictionary	= {};
		this.row_index	= 0;
	}

	handleShortcuts(kse:KeyboardShortcutEvent)
	{
		if( !this.item_info )
			return;

		console.log('new event',kse);

		if( kse.shortcut.name == ShortcutsService.ESCAPE )
		{
			this.orderItemInfoList.emit([]);
			kse.stopPropagation();
			return;
		}


		console.log('Space is ',ShortcutsService.SPACE );

		if( kse.shortcut.name == ShortcutsService.SPACE )
		{
			if( this.item_info && this.item_info.options[ this.option_index ].values.length )
			{
				//console.log( this.item_info.options[ this.option_index ] );//.values[ this.row_index ] )
				this.optionClicked( this.item_info.options[ this.option_index ].values[this.row_index] );
				kse.stopPropagation();
			}
			return;
		}

		if( kse.shortcut.name == ShortcutsService.ENTER )
		{
			//kse.stopPropagation();
			return;
		}

		if( kse.shortcut.name == ShortcutsService.ARROW_UP && this.row_index > 0 )
		{
			this.row_index--;
			this.option_view_port.scrollToIndex(this.row_index, "smooth");
			kse.stopPropagation();
			return;
		}
		else if( kse.shortcut.name == ShortcutsService.ARROW_DOWN && this.row_index < this.item_info.options[ this.option_index ].values.length-1 )
		{
			this.row_index++;
			this.option_view_port.scrollToIndex(this.row_index, "smooth");
			kse.stopPropagation();
			return;
		}
		else if( kse.shortcut.name == ShortcutsService.ARROW_RIGHT && this.option_index < this.item_info.options.length-1 )
		{
			this.option_index++;
			this.option_view_port.scrollToIndex(this.row_index, "smooth");
			kse.stopPropagation();
			return;
		}
		else if( kse.shortcut.name == ShortcutsService.ARROW_LEFT && this.option_index > 0 )
		{
			this.option_index--;
			this.option_view_port.scrollToIndex(this.row_index, "smooth");
			kse.stopPropagation();
			return;
		}
	}

	ngOnChanges(changes: SimpleChanges): void
	{

		if('item_info' in changes )
		{
			this.option_dictionary = {};

			if( changes['item_info'] )
			{
				this.subs.unsubscribe();
				this.subs.sink = this.keyboard_subscription = this.shortcuts.shortcuts.subscribe((evt)=>this.handleShortcuts(evt));
			}
			else
			{
				this.subs.unsubscribe();
			}
		}
	}

	optionClicked(iovi:ItemOptionValueInfo)
	{

		let item_option_id:number = iovi.item_option_value.item_option_id as number;

		let item_option:ItemOptionInfo = this.item_info.options[ this.option_index ];

		let index = item_option.values.findIndex( (v)=> v.item_option_value.id == iovi.item_option_value.id );

		if( index > -1 )
		{
			if( this.option_index != index )
			{
				this.row_index = index;
			}
		}


		if( !(iovi.item_option_value.id in this.option_dictionary) )
		{
			this.addOneItemOptionValueInfo(iovi);
		}
		else if( iovi.item_option_value.max_extra_qty <= this.option_dictionary[ iovi.item_option_value.id ] )
		{
			this.removeItemOptionValueInfo(iovi);
			return;
		}
		else
		{
			this.addOneItemOptionValueInfo(iovi);
		}

		//Checamos si se pasa y le quitamos
		let total_selected:number =0;
		let max_options:number = 0;

		item_option.values.forEach((iovi2:ItemOptionValueInfo)=>
		{
			if( this.option_dictionary[ iovi2.item_option_value.id ] )
			{
				console.log('WHAYYYYY', this.option_dictionary[ iovi2.item_option_value.id ]);
				total_selected+= this.option_dictionary[ iovi2.item_option_value.id ];
				max_options++;
			}
		});

		console.log( this.option_dictionary )
		console.log( item_option.item_option.max_options);
		console.log( 'Max options', max_options, item_option.item_option.max_options );

		if( item_option.item_option.max_options && max_options > item_option.item_option.max_options )
		{
			if( this.item_option_values_queue_by_item_option_id[ item_option_id ] && this.item_option_values_queue_by_item_option_id[ item_option_id ].length )
			{
				let id = this.item_option_values_queue_by_item_option_id[ item_option_id ][0].item_option_value_id;
				let iovi2	= item_option.values.find(i=>i.item_option_value.id==id) as ItemOptionValueInfo; //XXX
				this.removeItemOptionValueInfo( iovi2 );
				return;
			}
			else
			{
				console.log('Fallo en el sistema');
			}
		}

		console.log('total selected', total_selected, item_option.item_option.max_extra_qty );

		if(item_option.item_option.max_extra_qty && total_selected > item_option.item_option.max_extra_qty )
		{
			if( this.item_option_values_queue_by_item_option_id[ item_option_id ] && this.item_option_values_queue_by_item_option_id[ item_option_id ].length )
			{
				let qty = this.item_option_values_queue_by_item_option_id[ item_option_id ][0];

				if( qty.qty > 0 )
				{
					let id = this.item_option_values_queue_by_item_option_id[ item_option_id ][0].item_option_value_id;
					let iovi2	= item_option.values.find(i=>i.item_option_value.id==id) as ItemOptionValueInfo;//XXX
					this.removeOneItemOptionValueInfo( iovi2 );
				}
				else
				{
					console.log('Posible error en el sistema xddkdas');
				}
			}
			else
			{
				console.log('Posible error en el sistema codigo2 ffffff');
			}
		}
	}


	addOneItemOptionValueInfo(iovi:ItemOptionValueInfo)
	{
		let item_option_id = iovi.item_option_value.item_option_id || 0;

		if( !(iovi.item_option_value.id in this.option_dictionary) )
		{
			this.option_dictionary[ iovi.item_option_value.id ] = 0;
		}

		this.option_dictionary[ iovi.item_option_value.id ]++;

		if( !(item_option_id in this.item_option_values_queue_by_item_option_id ) )
		{
			this.item_option_values_queue_by_item_option_id[ item_option_id ] = [];
		}

		let qty:Qty = {
			item_option_value_id: iovi.item_option_value.id,
			qty: 0
		}

		let index = this.item_option_values_queue_by_item_option_id[ item_option_id ].findIndex((i:Qty)=>i.item_option_value_id == iovi.item_option_value.id);

		if( index == -1 )
		{
			this.item_option_values_queue_by_item_option_id[ item_option_id ].push( qty );
		}
		else
		{
			//qty = this.item_option_values_queue_by_item_option_id[ item_option_id ][index];
			let qty_array:Qty[] = this.item_option_values_queue_by_item_option_id[ item_option_id ].splice(index,1);
			qty = qty_array[0];
			this.item_option_values_queue_by_item_option_id[item_option_id].push( qty );
		}
		qty.qty++;
	}

	removeOneItemOptionValueInfo(iovi:ItemOptionValueInfo):void
	{

		//Posible truene
		let item_option_id = iovi.item_option_value.item_option_id || 0;

		if( !(iovi.item_option_value.id in this.option_dictionary) )
		{
			this.option_dictionary[ iovi.item_option_value.id ] = 1;
		}

		this.option_dictionary[ iovi.item_option_value.id ]--;


		if( this.item_option_values_queue_by_item_option_id[ item_option_id ] && this.item_option_values_queue_by_item_option_id[ item_option_id ].length )
		{
			let index = this.item_option_values_queue_by_item_option_id[ item_option_id ].findIndex((i:Qty)=>i.item_option_value_id == iovi.item_option_value.id);

			if( index> -1 )
			{
				this.item_option_values_queue_by_item_option_id[ item_option_id ][index].qty--;
			}

			if( this.item_option_values_queue_by_item_option_id[ item_option_id ][index].qty == 0 )
			{
				this.item_option_values_queue_by_item_option_id[ item_option_id ].splice(index,1);
			}
		}
		else
		{
			console.error( 'Posible error del sistema no se encontrol el indice' );
		}
	}

	removeItemOptionValueInfo(iovi:ItemOptionValueInfo):void
	{

		//Posible truene
		let item_option_id = iovi.item_option_value.item_option_id || 0;

		if( iovi?.item_option_value?.id && !(iovi?.item_option_value?.id in this.option_dictionary) )
		{
			this.option_dictionary[ iovi.item_option_value.id ] = 1;
		}

		this.option_dictionary[ iovi.item_option_value.id ] = 0;

		if( this.item_option_values_queue_by_item_option_id[ item_option_id ] && this.item_option_values_queue_by_item_option_id[ item_option_id ].length )
		{
			let index = this.item_option_values_queue_by_item_option_id[ item_option_id ].findIndex((i:Qty)=>i.item_option_value_id == iovi.item_option_value.id);

			if( index> -1 )
			{
				this.item_option_values_queue_by_item_option_id[ item_option_id ].splice(index,1);
			}
		}
		else
		{
			console.error( 'Posible error del sistema no se encontrol el indice' );
		}
	}

	next()
	{
		this.option_index++;
	}

	done()
	{
		let items:OrderItemInfo[] =[];

		let price:Price | null= this.item_info.prices.find((i:Price)=>
		{
			return i.price_list_id == this.price_list_id && this.price_type_id == i.price_type_id
		}) || null;

		if( price == null )
			throw 'No tiene asignado un precio';

		let created = new Date();

		let order_item = GetEmpty.order_item();
		order_item.item_id = this.item_info.item.id;
		order_item.tax_included = price.tax_included;
		order_item.stock_status = 'IN_STOCK';
		order_item.unitary_price = price.price;
		order_item.total = price.price;
		order_item.is_free_of_charge = 'NO';

		this.rest.updateOrderItemPrice( order_item, this.tax_percent, 0);

		items.push
		({
			order_item,
			item: this.item_info.item,
			category: this.item_info.category,
			exceptions: this.item_info.exceptions,
			records: [],
			prices: this.item_info.prices,
			options: [],
			created
		})

		let item_ids = [ this.item_info.item.id ];

		this.item_info.options.forEach((ioi:ItemOptionInfo)=>
		{
			let ioi_id = ioi.item_option.id;
			if( ioi_id in this.item_option_values_queue_by_item_option_id )
			{
				let qtities = this.item_option_values_queue_by_item_option_id[ ioi_id ];
				qtities.forEach((qty)=>
				{
					if( qty.qty > 0 )
					{
						let iovi = ioi.values.find(i=>i.item_option_value.id == qty.item_option_value_id );
						if( iovi )
						{
							item_ids.push( iovi.item.id );

							let unitary_price:number = iovi.item_option_value.extra_price;
							let created = new Date();
							created.setTime(order_item.item_group as number);

							let current_user_id = (this.rest.current_user as User).id as number

							let tmp:Order_Item =
							{
								item_id: iovi.item.id,
								item_group: order_item.item_group,
								item_option_id: iovi.item_option_value.item_option_id,
								original_unitary_price: unitary_price,
								unitary_price: 0,
								tax_included: order_item.tax_included,
								is_free_of_charge: unitary_price > 0 ? 'NO' : 'YES',
								stock_status: 'IN_STOCK',
								tax: 0,
								total: 0,
								qty:qty.qty,
								item_option_qty: qty.qty,
								note: '',
								delivered_qty: 0,
								delivery_status: 'PENDING',
								id_payment: null,
								discount: 0,
								exceptions: '',
								id:0,
								is_item_extra:'NO',//XXX No estoy seguro de este esta parte es de los extras posiblemente va que si.
								preparation_status:'PENDING',
								price_id: null,
								paid_qty: 0,
								return_required: 'NO', //Requiere devolucion, es si es retornable.
								status: 'ACTIVE',
								subtotal: 0,
								system_preparation_ended: null,
								system_preparation_started: null,
								updated_by_user_id: current_user_id,
								commanda_id:null,
								item_extra_id: null,
								order_id: order_item.order_id,
								updated: new Date(),
								commanda_status:'PENDING',
								created:new Date(),
								created_by_user_id:current_user_id
							};

							let prices:Price[] = [];
							let options:ItemOptionInfo[] = [];

							items.push
							({
								prices,
								options,
								order_item:tmp,
								item: iovi.item,
								category: iovi.category || null,
								records: [],
								exceptions: this.item_info?.exceptions || [],
								created
							});

						}
						else
						{
							console.warn('Error no se encontro el indice');
						}
					}
				});
			}
		});
		this.orderItemInfoList.emit(items);
	}

	cancelar()
	{
		this.orderItemInfoList.emit([]);
		this.option_index = 0;
		this.item_info = GetEmpty.itemInfo();
	}
}
