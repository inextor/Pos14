import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintCashClosingRoutingModule } from './print-cash-closing-routing.module';
import { PrintCashClosingComponent } from './print-cash-closing.component';


@NgModule({
  declarations: [
    PrintCashClosingComponent
  ],
  imports: [
    CommonModule,
    PrintCashClosingRoutingModule
  ]
})
export class PrintCashClosingModule { }
