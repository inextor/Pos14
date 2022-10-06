import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Preferences } from 'src/app/models/RestModels';

@Component({
	selector: 'app-image-uploader',
	templateUrl: './image-uploader.component.html',
	styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

	constructor(public rest:RestService) { }

	@Input() width:number	= 150;
	@Input() height: number = 150;
	@Input() image?:number | null	= null;
	@Output() imageChange	= new EventEmitter<number | null>();
	@Input() displayUploadedImageName	= true;
	@Input() displayUploadedImage		= true;
	@Input() container_classes:any = { 'avatar': true, 'avatar-4by3': true };
	@Input() image_classes:any ={'avatar-img': true,'rounded':true};
	@Input() max_height:number = 0;
	@Input() max_width:number = 0;

	preferences:Preferences = this.rest.getPreferencesFromSession();

	ngOnInit(): void
	{
		this.preferences = this.rest.getPreferencesFromSession();
	}

	uploadImage(evt:any)
	{
		if (evt.target.files.length)
		{
			this.rest.uploadImage(evt.target.files[0], false, this.max_width, this.max_height).subscribe((imageData) => {
				if( this.displayUploadedImageName )
					this.image = imageData.id;

				this.imageChange.emit( imageData.id );
			}, error => this.rest.showError(error));
		}
	}
}
