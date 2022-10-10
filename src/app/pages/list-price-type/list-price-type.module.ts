import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPriceTypeRoutingModule } from './list-price-type-routing.module';
import { ListPriceTypeComponent } from './list-price-type.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListPriceTypeComponent
  ],
  imports: [
    CommonModule,
    ListPriceTypeRoutingModule,
	SharedModule
  ]
})
export class ListPriceTypeModule { }
