import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintReceiptRoutingModule } from './print-receipt-routing.module';
import { PrintReceiptComponent } from './print-receipt.component';


@NgModule({
  declarations: [
    PrintReceiptComponent
  ],
  imports: [
    CommonModule,
    PrintReceiptRoutingModule
  ]
})
export class PrintReceiptModule { }
