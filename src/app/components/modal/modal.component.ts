import { Component, OnInit, Input,Output,EventEmitter, ViewChild, OnChanges, ElementRef, SimpleChanges	} from '@angular/core';
import { ShortcutsService } from '../../services/shortcuts.service';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
//export class ModalComponent implements OnInit, OnChanges
export class ModalComponent implements OnInit
{
	@Input() biggest_posible:boolean = false;
	@Input() show:boolean = false;
	@Input() closable:boolean = true;
	@Output() showChange= new EventEmitter<boolean>();
	//@ViewChild('dialog') dialog:ElementRef;

	constructor(private ss:ShortcutsService)
	{

	}
/*
	ngOnChanges(changes: SimpleChanges): void {

		if( changes['show'] )
		{
			console.log('Changes', changes );
			if( changes['show'].currentValue )
			{
				let nDialog = this.dialog.nativeElement as HTMLDialogElement;
				if( !nDialog.open )
					nDialog.showModal();
			}
			else
			{
				let nDialog = this.dialog.nativeElement as HTMLDialogElement;
				if(nDialog && nDialog.open )
					nDialog.close();
			}
		}
	}
*/

	ngOnInit()
	{
		this.ss.shortcuts.subscribe((response)=>
		{
			if( !this.show )
				return;

			if( response.shortcut.name == ShortcutsService.ESCAPE && this.closable )
			{
				this.showChange.emit( false );
/*
				console.log('DIALOG HAS', this.dialog );
				let nDialog = this.dialog.nativeElement as HTMLDialogElement;
				nDialog.showModal();
*/
			}
		});
	}

	close()
	{
		this.showChange.emit( false );
/*
		let nDialog = this.dialog.nativeElement as HTMLDialogElement;
		nDialog.showModal();
*/
	}
}
