import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCommandaRoutingModule } from './view-commanda-routing.module';
import { ViewCommandaComponent } from './view-commanda.component';


@NgModule({
  declarations: [
    ViewCommandaComponent
  ],
  imports: [
    CommonModule,
    ViewCommandaRoutingModule
  ]
})
export class ViewCommandaModule { }
