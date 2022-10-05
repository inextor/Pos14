import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAddressRoutingModule } from './client-address-routing.module';
import { ClientAddressComponent } from './client-address.component';


@NgModule({
  declarations: [
    ClientAddressComponent
  ],
  imports: [
    CommonModule,
    ClientAddressRoutingModule
  ]
})
export class ClientAddressModule { }
