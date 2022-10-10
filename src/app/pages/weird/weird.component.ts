import { Component } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Store } from 'src/app/models/RestModels';
import { BaseComponent } from '../base/base.component';

@Component({
	selector: 'app-weird',
	templateUrl: './weird.component.html',
	styleUrls: ['./weird.component.css']
})
export class WeirdComponent extends BaseComponent {

	qty: number = 1;
	store_id:number | string = '';
	store_list:Store[] = [];

	ngOnInit(): void {
		this.subs.sink = this.route.paramMap.pipe
		(
			mergeMap(()=>
			{
				return this.rest.store.search({limit:99999,sort_order:['name_ASC']});
			})
		)
		.subscribe( storeResponse =>
		{
			this.store_list = storeResponse.data;
		},(error)=>this.showError(error));
	}

	createTables(evt:Event)
	{
		this.is_loading = true;
		this.subs.sink = this.rest
			.update('createTables',{qty:this.qty, store_id:this.store_id})
			.subscribe(()=>
			{
				this.showSuccess('Mesas creadas');
				let f = evt.target as HTMLFormElement;
				f.reset();
			});
	}

	updateOffline()
	{
		this.rest.forceSyncOfflineItems();
	}
}
