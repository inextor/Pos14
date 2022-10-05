import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitOrderRoutingModule } from './split-order-routing.module';
import { SplitOrderComponent } from './split-order.component';


@NgModule({
  declarations: [
    SplitOrderComponent
  ],
  imports: [
    CommonModule,
    SplitOrderRoutingModule
  ]
})
export class SplitOrderModule { }
