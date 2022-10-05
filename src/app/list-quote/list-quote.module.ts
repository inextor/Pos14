import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListQuoteRoutingModule } from './list-quote-routing.module';
import { ListQuoteComponent } from './list-quote.component';


@NgModule({
  declarations: [
    ListQuoteComponent
  ],
  imports: [
    CommonModule,
    ListQuoteRoutingModule
  ]
})
export class ListQuoteModule { }
