import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPriceLogRoutingModule } from './list-price-log-routing.module';
import { ListPriceLogComponent } from './list-price-log.component';


@NgModule({
  declarations: [
    ListPriceLogComponent
  ],
  imports: [
    CommonModule,
    ListPriceLogRoutingModule
  ]
})
export class ListPriceLogModule { }
