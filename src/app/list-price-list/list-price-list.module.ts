import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPriceListRoutingModule } from './list-price-list-routing.module';
import { ListPriceListComponent } from './list-price-list.component';


@NgModule({
  declarations: [
    ListPriceListComponent
  ],
  imports: [
    CommonModule,
    ListPriceListRoutingModule
  ]
})
export class ListPriceListModule { }
