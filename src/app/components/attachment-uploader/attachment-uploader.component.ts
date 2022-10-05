import { Component, OnInit, Input, Output,EventEmitter,OnChanges,SimpleChanges} from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Preferences,File_Type } from 'src/app/models/RestModels';
import { AttachmentInfo } from 'src/app/models/models';

@Component({
  selector: 'app-attachment-uploader',
  templateUrl: './attachment-uploader.component.html',
  styleUrls: ['./attachment-uploader.component.css']
})
export class AttachmentUploaderComponent implements OnInit, OnChanges {

	constructor(public rest:RestService) { }

	@Input() attachment_id?:number;
	@Input() image?:number;
	@Input() default_message:string = 'Add File Attachment';
	@Output() attachmentChange= new EventEmitter<AttachmentInfo>();
	@Output() attachment_idChange = new EventEmitter<number>();
	@Input() displayUploadedAttachmentName:boolean = true;
	@Input() containerClasses:any = { 'avatar': true, 'avatar-sm': true };
	@Input() imageClasses:any ={'avatar-img': true};

	file_type?:File_Type;
	filename?:string;

	preferences?:Preferences;

	ngOnInit():void
	{
		this.preferences= this.rest.getPreferencesFromSession();
  }

	uploadAttachment(evt:any)
	{
		if (evt.target.files.length)
		{
			this.rest.uploadAttachment(evt.target.files[0], false).subscribe((attachmentInfo ) => {
				//console.log("Attachement attachmentInfo",attachmentInfo );
				this.file_type	= attachmentInfo.file_type
				this.filename	= attachmentInfo.attachment.original_filename;
				this.attachment_id	= attachmentInfo.attachment.id;

				this.attachmentChange.emit( attachmentInfo );
				this.attachment_idChange.emit( attachmentInfo.attachment.id );

				console.log('Emmiting ',attachmentInfo.attachment.id);
			}, error => this.rest.showError(error));
		}
	}

	ngOnChanges(props:SimpleChanges)
	{

		/*
		if( props['attachment_id'] && this.attachment_id !== null)
		{
			this.rest.attachmentInfo.get( this.attachment_id ).subscribe((response)=>
			{
				this.image = response.file_type.image_id;
				this.default_message  = response.attachment.original_filename;
			});
		}
		*/
	}
}
