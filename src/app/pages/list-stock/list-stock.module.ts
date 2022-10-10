import { NgModule } from '@angular/core';

import { ListStockRoutingModule } from './list-stock-routing.module';
import { ListStockComponent } from './list-stock.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ListStockComponent
  ],
  imports: [
    ListStockRoutingModule,
	SharedModule,
	BrowserModule,
  ]
})
export class ListStockModule { }
