import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveStockRecordRoutingModule } from './save-stock-record-routing.module';
import { SaveStockRecordComponent } from './save-stock-record.component';


@NgModule({
  declarations: [
    SaveStockRecordComponent
  ],
  imports: [
    CommonModule,
    SaveStockRecordRoutingModule
  ]
})
export class SaveStockRecordModule { }
