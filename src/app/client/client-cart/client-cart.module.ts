import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientCartRoutingModule } from './client-cart-routing.module';
import { ClientCartComponent } from './client-cart.component';


@NgModule({
  declarations: [
    ClientCartComponent
  ],
  imports: [
    CommonModule,
    ClientCartRoutingModule
  ]
})
export class ClientCartModule { }
