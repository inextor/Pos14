import { Component, Output,EventEmitter, Input, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, mergeMap} from 'rxjs/operators';
import { GetEmpty } from 'src/app/classes/GetEmpty';
import {KeyboardShortcutEvent} from 'src/app/classes/Utils';
import {Category } from 'src/app/models/RestModels';
import {BaseComponent} from 'src/app/pages/base/base.component';

@Component({
	selector: 'app-search-category',
	templateUrl: './search-category.component.html',
	styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent extends BaseComponent implements OnInit
{
	show_select:boolean = true;
	selected_category:Category = GetEmpty.category();
	selected_category_id:number | null = null;
	category_name:string = '';
	selected_index:number = -1;
	search_subject = new Subject<string>();
	category_list: Category[] = [];
	search_str:string = '';
	@Input() overflow_content:boolean = true;
	@Output() category = new EventEmitter<Category>();
	@Output() categoryId = new EventEmitter<number | null>();
	ngOnInit(): void 
	{
		this.subs.sink = this.rest.category
		.search ({ limit: 100, sort_order: ['name_ASC'] })
		.subscribe((response)=> 
		{ 
			this.show_select = response.total < 15; 
			this.selected_index = -1;
			this.category_list = response.data;
		}) 
		this.subs.sink = this.search_subject.pipe
		( 
			debounceTime(250),
			mergeMap((search:string) => 
			{ 
				return this.rest.category.search
				({ 
					limit: 10,
					sort_order: ['name_ASC'],
					start:{ name:search }
				})
			})
		)
		.subscribe((response)=>
		{
			this.selected_index = -1;
			this.category_list = response.data;
		},(error)=>
		{
			console.log(error);
		});

		this.subs.sink = this.shortcuts.shortcuts.subscribe((evt:KeyboardShortcutEvent)=>
		{
			if( this.category_list.length == 0 )
				return;

			if( evt.shortcut.key_combination == 'ArrowUp' && this.selected_index > 0 )
			{
				evt.stopPropagation() 
				this.selected_index--;
			}

			if( evt.shortcut.key_combination == 'ArrowDown' && this.selected_index <  this.category_list.length - 1 )
			{	
				evt.stopPropagation();
				this.selected_index++;
			}

			if( evt.shortcut.key_combination == 'Enter' )
			{
				if( this.category_list.length > 0  && this.selected_index > -1 && evt.stopPropagation() )
				{
					this.selected_category = this.category_list[this.selected_index];
					this.categoryIdChange(this.selected_category.id);
					this.selected_index = -1;
					this.category_list = [];
				}
				//this.selected_category_id = this.selected_category.id;
				//this.category_name = this.selected_category.name;
			}
		});
	}

	onSearch(search:string)
	{
		this.search_str = search;
		this.search_subject.next( search  );
	}

	categoryIdChange(category_id:number | null )
	{
		this.categoryId.emit( category_id );
		let to_emit:Category| undefined = undefined;


		if( category_id != null )
		{
			to_emit = this.category_list.find((category)=>
			{
				this.search_str = category.name;
				return category.id == category_id;
			});
		}

		this.selected_index = -1;
		//Only if had 20 or less
		if( !this.show_select )
			this.category_list = [];

		this.category.emit( to_emit );
	}
}
