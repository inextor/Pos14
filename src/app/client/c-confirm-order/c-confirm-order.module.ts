import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CConfirmOrderRoutingModule } from './c-confirm-order-routing.module';
import { CConfirmOrderComponent } from './c-confirm-order.component';


@NgModule({
  declarations: [
    CConfirmOrderComponent
  ],
  imports: [
    CommonModule,
    CConfirmOrderRoutingModule
  ]
})
export class CConfirmOrderModule { }
