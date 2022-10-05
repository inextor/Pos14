import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveOrderFacturaRoutingModule } from './save-order-factura-routing.module';
import { SaveOrderFacturaComponent } from './save-order-factura.component';


@NgModule({
  declarations: [
    SaveOrderFacturaComponent
  ],
  imports: [
    CommonModule,
    SaveOrderFacturaRoutingModule
  ]
})
export class SaveOrderFacturaModule { }
