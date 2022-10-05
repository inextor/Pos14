import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjustStockRoutingModule } from './adjust-stock-routing.module';
import { AdjustStockComponent } from './adjust-stock.component';


@NgModule({
  declarations: [
    AdjustStockComponent
  ],
  imports: [
    CommonModule,
    AdjustStockRoutingModule
  ]
})
export class AdjustStockModule { }
