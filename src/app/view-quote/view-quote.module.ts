import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewQuoteRoutingModule } from './view-quote-routing.module';
import { ViewQuoteComponent } from './view-quote.component';


@NgModule({
  declarations: [
    ViewQuoteComponent
  ],
  imports: [
    CommonModule,
    ViewQuoteRoutingModule
  ]
})
export class ViewQuoteModule { }
