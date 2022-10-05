import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturacionPeriodoRoutingModule } from './facturacion-periodo-routing.module';
import { FacturacionPeriodoComponent } from './facturacion-periodo.component';


@NgModule({
  declarations: [
    FacturacionPeriodoComponent
  ],
  imports: [
    CommonModule,
    FacturacionPeriodoRoutingModule
  ]
})
export class FacturacionPeriodoModule { }
