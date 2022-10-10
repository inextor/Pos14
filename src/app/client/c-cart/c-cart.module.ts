import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CCartRoutingModule } from './c-cart-routing.module';
import { CCartComponent } from './c-cart.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CCartComponent
  ],
  imports: [
    CommonModule,
    CCartRoutingModule,
	SharedModule
  ]
})
export class CCartModule { }
