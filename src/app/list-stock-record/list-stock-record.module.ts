import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStockRecordRoutingModule } from './list-stock-record-routing.module';
import { ListStockRecordComponent } from './list-stock-record.component';


@NgModule({
  declarations: [
    ListStockRecordComponent
  ],
  imports: [
    CommonModule,
    ListStockRecordRoutingModule
  ]
})
export class ListStockRecordModule { }
