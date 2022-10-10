import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { RestService } from '../../services/rest.service';

import { Router,ActivatedRoute} from "@angular/router"
import { Location } from	'@angular/common';



@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {


	@Input() path:string = '';
	@Input() total_pages:number = 1;
	@Input() current_page:number = 0;
	@Input() pages:number[] = [];
	@Output() selectedPage = new EventEmitter<number>();

	/*
	<app-paginacion [path]="'/tipo-precio'"  [total_pages]="total_pages" [current_page]="current_page"></app-paginacion>
	*/

	constructor( public rest:RestService, public router:Router, public route:ActivatedRoute, public location: Location)
	{

	}

	ngOnInit() {

	}

	gotoPage(page:number)
	{
		if( this.path == null )
		{
			this.selectedPage.emit( page );
		}
		else
		{
			let params = { page: page }
			this.router.navigate([this.path],{queryParams: params,  queryParamsHandling:"merge"});
		}
		//[routerLink]="[path]" [queryParams]="{pagina:total_pages-1}" queryParamsHandling="merge"
	}
}
