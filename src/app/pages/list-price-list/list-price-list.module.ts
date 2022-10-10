import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPriceListRoutingModule } from './list-price-list-routing.module';
import { ListPriceListComponent } from './list-price-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListPriceListComponent
  ],
  imports: [
    CommonModule,
    ListPriceListRoutingModule,
	SharedModule
  ]
})
export class ListPriceListModule { }
