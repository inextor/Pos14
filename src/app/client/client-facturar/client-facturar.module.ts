import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientFacturarRoutingModule } from './client-facturar-routing.module';
import { ClientFacturarComponent } from './client-facturar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ClientFacturarComponent
  ],
  imports: [
    CommonModule,
    ClientFacturarRoutingModule,
	SharedModule
  ]
})
export class ClientFacturarModule { }
