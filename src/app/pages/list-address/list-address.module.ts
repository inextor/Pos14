import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAddressRoutingModule } from './list-address-routing.module';
import { ListAddressComponent } from './list-address.component';


@NgModule({
  declarations: [
    ListAddressComponent
  ],
  imports: [
    CommonModule,
    ListAddressRoutingModule
  ]
})
export class ListAddressModule { }
