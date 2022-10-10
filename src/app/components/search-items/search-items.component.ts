import { Component, OnInit, EventEmitter,Output,Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import {RestService} from 'src/app/services/rest.service';
import {ItemInfo} from 'src/app/models/models';
import {SubSink} from 'subsink';
import { KeyboardShortcutEvent, ShortcutsService } from 'src/app/services/shortcuts.service';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-search-items',
	templateUrl: './search-items.component.html',
	styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit,OnDestroy,OnChanges{

	item_info_list:ItemInfo[] = [];
	@Input() search_str:string = '';
	@Output() search_strChange = new EventEmitter<string>();
	@Input() store_id:number| null	= null;
	@Input() reset_on_search:boolean = true;
	@Output() item_selected = new EventEmitter<ItemInfo>();
	@Input() reset:number = 0;

	subs = new SubSink();
	selected_index = -1;

	constructor(public rest:RestService,public shortcuts:ShortcutsService) { }

	ngOnChanges(changes: SimpleChanges): void
	{
		if( changes['search_str'] )
		{
			if( this.search_str == '' )
			{
				this.item_info_list.splice(0,this.item_info_list.length);
			}
		}
	}

	ngOnInit(): void
	{
		this.subs.sink = this.shortcuts.shortcuts.pipe
		(
			filter((evt:KeyboardShortcutEvent)=>
			{
				return evt.is_stopped === false;
			})
		).subscribe((evt)=>{
			this.shortcutHandler(evt);
		});
	}

	shortcutHandler(evt: KeyboardShortcutEvent)
	{
		if( this.item_info_list.length )
		{
			switch( evt.shortcut.key_combination )
			{
				case 'Escape':
				{
					if( evt.stopPropagation() )
					{
						this.selected_index = -1;
						this.item_info_list.splice(0,this.item_info_list.length);
					}
					return;
				}
				//case 'ArrowLeft':
				case 'ArrowUp':
				{
					if( this.selected_index > 0 )
					{
						this.selected_index--;
						evt.stopPropagation();
					}
					return;
				}
				case 'ArrowDown':
				{
					if( this.selected_index < this.item_info_list.length -1)
					{
						this.selected_index++;
						console.log('arrow down');
						evt.stopPropagation();
					}
					return;
				}
				case 'Enter':
				{
					this.onItemSelected( this.item_info_list[ this.selected_index ] );
					evt.stopPropagation();
					return;
				}
			}
		}
	}

	ngOnDestroy()
	{
		this.subs.unsubscribe();
	}

	onItemSelected(item_info:ItemInfo)
	{
		this.item_selected.emit( item_info );

		if( this.reset_on_search )
		{
			this.search_str = '';
			this.search_strChange.emit( this.search_str );
		}
		else
		{
			this.search_str = item_info.item.name || '';
			this.search_strChange.emit( this.search_str );
		}
		this.item_info_list.splice(0,this.item_info_list.length );
	}

	keyPressed(event:any)
	{
		//let keyboard_event = event as KeyboardEvent;

		//console.log( keyboard_event.key );

		//if( this.item_info_list.length )
		//{
		//	console.log('Procesand la lista no esta vacia');
		//	if( keyboard_event.key == 'ArrowDown' )
		//	{
		//		console.log('Arrow down');
		//		if( this.selected_index < (this.item_info_list.length -1) )
		//		{
		//			this.selected_index++;
		//			keyboard_event.preventDefault();
		//			keyboard_event.stopPropagation();
		//			return;
		//		}
		//	}
		//	if( keyboard_event.key == 'ArrowUp' )
		//	{
		//		console.log('Arrow up');
		//		if( this.selected_index > 0 )
		//		{
		//			this.selected_index--;
		//			keyboard_event.preventDefault();
		//			keyboard_event.stopPropagation();
		//			return;
		//		}
		//	}
		//	if( keyboard_event.key == 'Enter' )
		//	{
		//		console.log('Enter');
		//		this.onItemSelected( this.item_info_list[ this.selected_index ] );
		//		keyboard_event.preventDefault();
		//		keyboard_event.stopPropagation();
		//		return;
		//	}
		//}

		//if( keyboard_event.key == "Escape" )
		//{
		//	this.item_info_list = [];
		//	this.search_str = '';
		//	keyboard_event.stopPropagation();
		//	return;
		//}

		if( this.search_str == '' )
		{
			this.item_info_list = [];
			return;
		}

		this.search_strChange.emit( ''+this.search_str );

		//,{store_id:this.rest.current_user.store_id }
		this.subs.sink = this.rest.item_info.search({
			eq:{ status: 'ACTIVE'},
			//lk:{ name : event.target.value },
			limit: 50,
			search_extra:{store_id:this.store_id, category_name: event.target.value}
		})
		.subscribe((response)=>
		{
			for( let ii of response.data )
			{
				//let index = ii.category ? ii.item.name.trim().toLowerCase().indexOf(ii.category.name.trim().toLowerCase()) : -1;
				ii.display_category = ii.category && ii.item.name.trim().toLowerCase().indexOf(ii.category.name.trim().toLowerCase()) >= 0 || false;
			}
			this.item_info_list = response.data;
			this.selected_index = 0;
		});
	}
}
