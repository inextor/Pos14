import { Component, OnInit } from '@angular/core';
import {Utils} from 'src/app/classes/Utils';
import { CashCloseInfo } from 'src/app/models/models';
import {Cash_Close, User} from 'src/app/models/RestModels';
import {BaseComponent} from 'src/app/pages/base/base.component';

@Component({
	selector: 'app-save-cash-close',
	templateUrl: './save-cash-close.component.html',
	styleUrls: ['./save-cash-close.component.css']
})
export class SaveCashCloseComponent extends BaseComponent implements OnInit {

	cash_close_list:Cash_Close[] =  [];

	ngOnInit(): void
	{
		let current_user = this.rest.current_user as User;

		this.subs.sink = this.rest.cash_close.search
		({
			eq:{ created_by_user_id: current_user.id as number},
			sort_order: ['id_DESC'],
			limit: 10
		})
		.subscribe((response)=>
		{
			this.cash_close_list = response.data;
		});
	}

	crearCorteNuevo(_evt:Event)
	{
		let date:string = Utils.getMysqlStringFromLocalDate( new Date() );

		let cash_close:Partial<Cash_Close> = { end: date };

		this.subs.sink = this.rest.cash_close_info.create({ cash_close,funds:[] })
		.subscribe((response)=>
		{
			this.showSuccess('Corte exitoso');

			let cash_close_info:CashCloseInfo = response;

			let url = '/#/print-corte/'+this.rest.local_preferences.default_cash_close_receipt+'/'+cash_close_info.cash_close.id+'/cerrar'
			let w = window.open(url ) as any;

			w.addEventListener('/afterprint',(_evt2:Event)=>{
				this.rest.logout();
				w.close();
			});
		},(error)=>this.showError(error));
	}
}
