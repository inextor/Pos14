import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPriceTypeRoutingModule } from './list-price-type-routing.module';
import { ListPriceTypeComponent } from './list-price-type.component';


@NgModule({
  declarations: [
    ListPriceTypeComponent
  ],
  imports: [
    CommonModule,
    ListPriceTypeRoutingModule
  ]
})
export class ListPriceTypeModule { }
