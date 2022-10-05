import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPriceRoutingModule } from './list-price-routing.module';
import { ListPriceComponent } from './list-price.component';


@NgModule({
  declarations: [
    ListPriceComponent
  ],
  imports: [
    CommonModule,
    ListPriceRoutingModule
  ]
})
export class ListPriceModule { }
