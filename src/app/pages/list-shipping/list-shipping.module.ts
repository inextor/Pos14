import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListShippingRoutingModule } from './list-shipping-routing.module';
import { ListShippingComponent } from './list-shipping.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListShippingComponent
  ],
  imports: [
    CommonModule,
    ListShippingRoutingModule,
	SharedModule
  ]
})
export class ListShippingModule { }
