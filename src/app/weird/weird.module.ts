import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeirdRoutingModule } from './weird-routing.module';
import { WeirdComponent } from './weird.component';


@NgModule({
  declarations: [
    WeirdComponent
  ],
  imports: [
    CommonModule,
    WeirdRoutingModule
  ]
})
export class WeirdModule { }
