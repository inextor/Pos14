import { Component, OnInit } from '@angular/core';
import {FacturacionRequest} from 'src/app/models/models';
import {BaseComponent} from 'src/app/pages/base/base.component';

@Component({
	selector: 'app-client-facturar',
	templateUrl: './client-facturar.component.html',
	styleUrls: ['./client-facturar.component.css']
})

export class ClientFacturarComponent extends BaseComponent implements OnInit
{
	facturacion_request:FacturacionRequest = this.getEmptyFacturacionRequest();

	ngOnInit(): void
	{
		this.facturacion_request = this.getEmptyFacturacionRequest();
		this.subs.sink = this.route.paramMap.subscribe(()=>
		{
			this.facturacion_request = this.getEmptyFacturacionRequest();
		});
	}

	getEmptyFacturacionRequest(): FacturacionRequest
	{
		return {
			facturacion_code: '',
			razon_social:'',
			email:'',
			rfc:''
		};
	}

	save(evt:Event)
	{
		this.subs.sink = this.rest.facturacion_request
		.create( this.facturacion_request )
		.subscribe
		(
			(response)=>
			{
				this.showSuccess("Se facturó exitosamente, por favor revisar su correo electrónico");
			}
			,(error:any)=>
			{
				this.showError(error)
			}
		);
	}
}
