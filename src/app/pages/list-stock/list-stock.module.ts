import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStockRoutingModule } from './list-stock-routing.module';
import { ListStockComponent } from './list-stock.component';


@NgModule({
  declarations: [
    ListStockComponent
  ],
  imports: [
    CommonModule,
    ListStockRoutingModule
  ]
})
export class ListStockModule { }
