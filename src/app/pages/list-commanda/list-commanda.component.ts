import { Component, OnInit } from '@angular/core';
import { SearchObject } from '../../services/Rest';
import { BaseComponent } from '../base/base.component';

import {Commanda, Store} from '../../models/RestModels';
import { Utils} from 'src/app/classes/Utils';
import {forkJoin} from 'rxjs';


@Component({
	selector: 'app-list-commanda',
	templateUrl: './list-commanda.component.html',
	styleUrls: ['./list-commanda.component.css']
})

export class ListCommandaComponent extends BaseComponent implements OnInit {
	file:File | null = null;
	show_import:boolean = false;
	commanda_search:SearchObject<Commanda> = this.getEmptySearch();
	commanda_list:Commanda[] = [];
	store_dictionary:Record<number,Store> = {};

	ngOnInit()
	{
		this.path = '/list-commanda';

		this.subs.sink = this.route.queryParamMap.subscribe((queryParamMap) =>
		{
			let fields = [ "id","name","store_id" ];
			this.commanda_search = this.getSearch(queryParamMap, fields );

			this.titleService.setTitle('Comandas');
			this.is_loading = true;
			this.current_page = this.commanda_search.page;

			this.is_loading = true;
			this.subs.sink = forkJoin
			({
				commanda: this.rest.commanda.search(this.commanda_search),
				store: this.rest.store.search({limit:99999, csv:{status:["ACTIVE","DISABLED"]}, sort_order:['name_ASC']})
			})
			.subscribe((response)=>
			{
				this.store_dictionary = Utils.createDictionary( response.store.data, 'id');
				this.setPages( this.commanda_search.page, response.commanda.total );
				this.is_loading = false;
				this.commanda_list = response.commanda.data;
			},(error)=>this.showError(error));
		});
	}

	/*
	onFileChanged(event)
	{
		if (event.target.files.length)
		{
			this.file = event.target.files[0];
		}
	}
	*/
}
