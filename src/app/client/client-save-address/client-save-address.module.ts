import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSaveAddressRoutingModule } from './client-save-address-routing.module';
import { ClientSaveAddressComponent } from './client-save-address.component';


@NgModule({
  declarations: [
    ClientSaveAddressComponent
  ],
  imports: [
    CommonModule,
    ClientSaveAddressRoutingModule
  ]
})
export class ClientSaveAddressModule { }
