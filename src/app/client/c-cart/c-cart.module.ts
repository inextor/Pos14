import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CCartRoutingModule } from './c-cart-routing.module';
import { CCartComponent } from './c-cart.component';


@NgModule({
  declarations: [
    CCartComponent
  ],
  imports: [
    CommonModule,
    CCartRoutingModule
  ]
})
export class CCartModule { }
