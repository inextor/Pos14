import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintReturnReceiptRoutingModule } from './print-return-receipt-routing.module';
import { PrintReturnReceiptComponent } from './print-return-receipt.component';


@NgModule({
  declarations: [
    PrintReturnReceiptComponent
  ],
  imports: [
    CommonModule,
    PrintReturnReceiptRoutingModule
  ]
})
export class PrintReturnReceiptModule { }
