import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeirdRoutingModule } from './weird-routing.module';
import { WeirdComponent } from './weird.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WeirdComponent
  ],
  imports: [
	  SharedModule,
	  CommonModule,
	  WeirdRoutingModule
  ]
})
export class WeirdModule { }
