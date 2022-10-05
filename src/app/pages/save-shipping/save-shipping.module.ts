import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveShippingRoutingModule } from './save-shipping-routing.module';
import { SaveShippingComponent } from './save-shipping.component';


@NgModule({
  declarations: [
    SaveShippingComponent
  ],
  imports: [
    CommonModule,
    SaveShippingRoutingModule
  ]
})
export class SaveShippingModule { }
