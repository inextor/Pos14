import { Component, OnInit } from '@angular/core';
import { SearchObject } from '../../services/Rest';
import { BaseComponent } from '../base/base.component';
import {Billing_Data} from '../../models/RestModels';


@Component({
	selector: 'app-list-billing-data',
	templateUrl: './list-billing-data.component.html',
	styleUrls: ['./list-billing-data.component.css']
})

export class ListBillingDataComponent extends BaseComponent implements OnInit {
	//file:File | null = null;
	show_import:boolean = false;
	billing_data_search:SearchObject<Billing_Data> = this.getEmptySearch();
	billing_data_list:Billing_Data[] = [];

	ngOnInit()
	{
		this.path = '/list-billing-data';

		this.subs.sink = this.route.queryParamMap.subscribe((queryParamMap) =>
		{
			let fields = [ "id","rfc","usuario","password","created_by_user_id","updated_by_user_id","created","updated" ];
			let extra_keys:Array<string> = []; //['search_param1','project_id','some_id'];
			this.billing_data_search = this.getSearch(queryParamMap, fields, extra_keys );

			this.titleService.setTitle('Datos de facturación');
			this.is_loading = true;
			this.current_page = this.billing_data_search.page;

			//this.billing_data_search.eq.rfc = 'algo';
			//this.billing_data_search.lk.password= 'jorge';
			//this.billing_data_search.start.usuario= 'jj';
			//this.billing_data_search.end.usuario= 'jj';
			//this.billing_data_search.ge.id = 1;
			//this.billing_data_search.lt.id = 10;


			//select * from this.billing_data WHERE rc = 'algo' AND (password LIKE '%jorge%' OR usuario LIKE 'jj%' OR usuario LIKE '%jj') AND id >= 1 AND id <= 10;

			this.is_loading = true;
			this.subs.sink = this.rest.billing_data.search(this.billing_data_search)
			.subscribe((response)=>
			{
				this.setPages( this.billing_data_search.page, response.total );
				this.billing_data_list = response.data;
				this.is_loading = false;
			},(error)=>this.showError(error));

		});
	}

	//onFileChanged(event)
	//{
	//	if (event.target.files.length)
	//	{
	//		this.file = event.target.files[0];
	//	}
	//}

	//uploadFile()
	//{
	//	this.is_loading = true;
	//	Utils.xlsx2json( this.file,["id","rfc","usuario","password","created_by_user_id","updated_by_user_id","created","updated"]).then((json)=>
	//	{
	//		//Filter json then upload
	//		this.subs.sink	= this.rest.billing_data.batchUpdate(json).subscribe((result)=>
	//		{
	//			if( this.billing_data_list.length == 0 )
	//			{
	//				this.setPages( 0, result.length );
	//				this.billing_data_list = result.slice(0,this.pageSize);
	//			}
	//			this.is_loading =  false;
    //            this.show_import = false;
    //            this.showSuccess('Imported succesfully '+result.length+' items');

	//		},(error)=>this.showError(error));
	//	});
	//}

	//exportFile()
	//{
	//	this.is_loading = true;
	//	this.subs.sink	= this.rest.billing_data.search({limit:100000}).subscribe((response)=>
	//	{
	//		Utils.array2xlsx(response.data,'billing_data.xlsx',["id","rfc","usuario","password","created_by_user_id","updated_by_user_id","created","updated"])
	//		this.is_loading = false;
	//	},(error)=>this.showError(error));
	//}
}
