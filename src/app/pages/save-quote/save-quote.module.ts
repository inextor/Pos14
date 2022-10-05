import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveQuoteRoutingModule } from './save-quote-routing.module';
import { SaveQuoteComponent } from './save-quote.component';


@NgModule({
  declarations: [
    SaveQuoteComponent
  ],
  imports: [
    CommonModule,
    SaveQuoteRoutingModule
  ]
})
export class SaveQuoteModule { }
