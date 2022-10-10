import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPriceLogRoutingModule } from './list-price-log-routing.module';
import { ListPriceLogComponent } from './list-price-log.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListPriceLogComponent
  ],
  imports: [
    CommonModule,
    ListPriceLogRoutingModule,
	SharedModule
  ]
})
export class ListPriceLogModule { }
