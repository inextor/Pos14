import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { ErrorMessage } from 'src/app/classes/Utils';

interface Msg_Class
{
	[key:string]:boolean;
}

@Component({
	selector: 'app-toast-error',
	templateUrl: './toast-error.component.html',
	styleUrls: ['./toast-error.component.css']
})


export class ToastErrorComponent implements OnInit
{
	error_list:ErrorMessage[] = [];

	constructor(private restService:RestService)
	{

	}

	ngOnInit()
	{
		this.restService.errorObservable.subscribe((error)=>
		{
			if( error == null )
				return;

			if( error.type == '' )
				return;


			let previous = this.error_list.findIndex((e)=>e.type == error.type && e.message == error.message);


			if( this.error_list.length > 4 && previous == -1 )
			{
				this.error_list.shift();
			}

			if( previous !== -1 )
			{
				let prev = this.error_list.splice(previous,1);
				error.count = prev[0].count + 1;
			}
			this.error_list.push( error );


			setTimeout(() =>
			{
				this.clicked(error);
			}, 6500);
		});
	}

	clicked(error:ErrorMessage)
	{
		let index = this.error_list.findIndex(i=>i===error);
		if( index > -1 )
			this.error_list.splice(index,1);
	}
	// clicked()
	// {
	// 	this.message = null;
	// 	this.show = false;
	// 	this.hightlight = false;
	// }
}
