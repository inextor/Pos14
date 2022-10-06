import { Component, EventEmitter, Input, Output } from '@angular/core';
import {forkJoin, of} from 'rxjs';
import {catchError, mergeMap} from 'rxjs/operators';
import { GetEmpty } from 'src/app/classes/GetEmpty';
import {ItemInfo} from 'src/app/models/models';
import {Category, Price, Price_List, Price_Type, Unidad_Medida_Sat, User} from 'src/app/models/RestModels';
import {BaseComponent} from 'src/app/pages/base/base.component';

@Component({
	selector: 'app-add-new-item-easy',
	templateUrl: './add-new-item-easy.component.html',
	styleUrls: ['./add-new-item-easy.component.css']
})
export class AddNewItemEasyComponent extends BaseComponent
{
	@Output() newItem = new EventEmitter<ItemInfo | null>();
	@Input() type:string = 'PRODUCT';

	item_info:ItemInfo = GetEmpty.itemInfo();
	category_list: Category[] = [];
	unidad_medida_sat_list: Unidad_Medida_Sat[] = [];

	price_list_list:Price_List[] = [];
	price_type_list:Price_Type[] = [];
	price_dict:Record<string, Price> = {};

	override ngOnInit(): void
	{
		this.subs.sink = forkJoin
		({
			categories: this.rest.category.search({eq:{type: this.type},sort_order:['name_ASC'], limit:9999}),
			price_list: this.rest.price_list.search({limit:9999, sort_order:['name_ASC']}),
			price_type: this.rest.price_type.search({limit:9999, sort_order:['name_ASC']}),
			unidad_medida_sat: this.rest.unidad_medida_sat.search
			({
				limit:9999,
				sort_order:['nombre_ASC']
			})
		})
		.subscribe((response)=>
		{
			this.initPriceLists( response.price_list.data, response.price_type.data );
			this.price_list_list = response.price_list.data;
			this.price_type_list = response.price_type.data;
			this.category_list = response.categories.data;
			this.unidad_medida_sat_list = response.unidad_medida_sat.data;
		})
	}

	initPriceLists(pl:Price_List[], pt:Price_Type[])
	{
		this.price_dict = {};
		pl.forEach(price_list=>
		{
			pt.forEach(price_type=>
			{
				let key:string = price_list.id+'-'+price_type.id
				let user  = this.rest.current_user as User;

				this.price_dict[ key ] = {
					price_list_id 	: price_list.id,
					price_type_id	: price_type.id,
					created_by_user_id: user.id,
					created			: new Date(),
					updated			: new Date(),
					updated_by_user_id: user.id,
					id: 0,
					item_id			: this.item_info.item.id,
					price			: 0,
					tax_included	: 'NO',
					currency_id		: 'MXN'
				};
			});
		});
	}

	

	resetValues()
	{
		this.item_info = GetEmpty.itemInfo();
	}

	save(evt:Event)
	{
		this.subs.sink	= this.rest.item_info.create
		({
			item: this.item_info.item,
			options: [],
			exceptions: []
		})
		.pipe
		(
			mergeMap((response)=>
			{
				let price_array:Price[]= [];

				this.price_type_list.forEach((pt)=>
				{
					this.price_list_list.forEach((pl:Price_List)=>
					{
						let k = pl.id+'-'+pt.id;
						let p = this.price_dict[k];

						if( p.price>0 )
						{
							if( pt.tax_model != 'ALL' )
							{
								p.tax_included = pt.tax_model == 'TAX_INCLUDED' ? 'YES' : 'NO';
							}
							p.price = p.price;
							p.item_id = response.item.id;

							price_array.push( p );
						}
					});
				});

				return this.rest.price
				.batchCreate(price_array).pipe
				(
					mergeMap(()=>
					{
						return of( response );
					}),
					catchError((_error)=>
					{
						return of( response );
					})
				);
			})
		)
		.subscribe((item_info)=>
		{
			this.is_loading = false;

			try{
				this.showSuccess('El artículo se guardó exitosamente');
				let formElement = evt.target as HTMLFormElement;
				this.resetValues();
				this.initPriceLists( this.price_list_list, this.price_type_list );
				formElement.reset();
			}
			catch(e)
			{

			}

			this.newItem.emit(item_info);
		},(error)=>this.showError(error));
	}
}
