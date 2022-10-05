import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientConfigureSelectedItemRoutingModule } from './client-configure-selected-item-routing.module';
import { ClientConfigureSelectedItemComponent } from './client-configure-selected-item.component';


@NgModule({
  declarations: [
    ClientConfigureSelectedItemComponent
  ],
  imports: [
    CommonModule,
    ClientConfigureSelectedItemRoutingModule
  ]
})
export class ClientConfigureSelectedItemModule { }
