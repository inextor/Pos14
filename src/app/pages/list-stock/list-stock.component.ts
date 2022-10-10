import { Component, OnInit } from '@angular/core';
import { SearchObject } from '../../services/Rest';
import { BaseComponent } from '../base/base.component';
import {  StockRecordInfo } from '../../models/models';
import {Category, Stock_Record, Store} from '../../models/RestModels';
import {mergeMap} from 'rxjs/operators';
import {Utils} from 'src/app/classes/Utils';


@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent extends BaseComponent implements OnInit {

	file:File | null = null;
	show_import:boolean = false;
	stock_search:SearchObject<Stock_Record> = this.getEmptySearch();
	type:string = 'PRODUCT';
	category_dictionary:Record<number,Category> = {}
	store_list:Store[] = [];
	stock_record_info_list:StockRecordInfo[] = []

	ngOnInit()
	{
		this.path = '/list-stock';
		this.subs.sink = this.route.queryParamMap.subscribe( params =>
		{
			this.type = this.route.snapshot.paramMap.get('type') || 'PRODUCT';
			this.path = '/list-stock/'+this.type;

			this.titleService.setTitle('Inventario');
			this.stock_search = this.getSearch(params, ['store_id','name'],['category_type','name']);

			this.stock_search.limit = this.page_size;
			this.current_page = this.stock_search.page;
			this.is_loading = true;
			this.stock_search.search_extra['category_type']=this.type;

			this.subs.sink = this.rest.store.search({limit:99999,sort_order:['name_ASC']})
			.pipe
			(
				mergeMap((response)=>
				{
					if( !this.stock_search?.eq?.store_id)
					{
						this.stock_search.eq.store_id = response.data[0].id;
					}
					this.store_list = response.data;
					if( !this.stock_search.eq.store_id )
					{
						this.stock_search.eq.store_id =  this.store_list[0].id;
					}

					let search = ''+(this.stock_search.search_extra['name'] || 'a');
					return  this.rest.getStockReport
					(
						this.stock_search.eq.store_id,
						this.stock_search.page,
						this.stock_search.limit,
						search,
						this.type
					);
				})
			).subscribe((response)=>
			{
				this.stock_record_info_list = response.data;
				this.setPages( this.stock_search.page, response.total );
			},error=>this.showError(error));
		});
	}

	exportFile()
	{
		this.is_loading = true;

		let search = ''+(this.stock_search.search_extra['name'] || 'a');

		this.subs.sink = this.rest
		.getStockReport(this.stock_search.eq.store_id as number,0,99999999999,search,this.type)
		.subscribe
		(
			(response)=>
			{
				this.is_loading = false;
				let data = response.data.map((sri:StockRecordInfo)=>{
					return { categoria: sri?.category?.name || '', Articulo: sri.item.name || '', cantidad: sri.stock_record.qty }
				});

				console.log( data );
				let d = new Date();

				Utils.array2xlsx(data, 'Inventario'+Utils.getMysqlStringFromDate(d).substring(0,10)+'.xlsx', ['categoria','Articulo','Cantidad']);
			}
		);
	}
}
