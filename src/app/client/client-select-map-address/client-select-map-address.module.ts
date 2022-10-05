import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSelectMapAddressRoutingModule } from './client-select-map-address-routing.module';
import { ClientSelectMapAddressComponent } from './client-select-map-address.component';


@NgModule({
  declarations: [
    ClientSelectMapAddressComponent
  ],
  imports: [
    CommonModule,
    ClientSelectMapAddressRoutingModule
  ]
})
export class ClientSelectMapAddressModule { }
