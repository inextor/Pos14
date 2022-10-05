import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveAddressRoutingModule } from './save-address-routing.module';
import { SaveAddressComponent } from './save-address.component';


@NgModule({
  declarations: [
    SaveAddressComponent
  ],
  imports: [
    CommonModule,
    SaveAddressRoutingModule
  ]
})
export class SaveAddressModule { }
