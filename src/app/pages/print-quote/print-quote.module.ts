import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintQuoteRoutingModule } from './print-quote-routing.module';
import { PrintQuoteComponent } from './print-quote.component';


@NgModule({
  declarations: [
    PrintQuoteComponent
  ],
  imports: [
    CommonModule,
    PrintQuoteRoutingModule
  ]
})
export class PrintQuoteModule { }
