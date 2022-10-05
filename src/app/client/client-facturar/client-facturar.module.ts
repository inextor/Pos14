import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientFacturarRoutingModule } from './client-facturar-routing.module';
import { ClientFacturarComponent } from './client-facturar.component';


@NgModule({
  declarations: [
    ClientFacturarComponent
  ],
  imports: [
    CommonModule,
    ClientFacturarRoutingModule
  ]
})
export class ClientFacturarModule { }
