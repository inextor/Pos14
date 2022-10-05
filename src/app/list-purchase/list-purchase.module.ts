import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPurchaseRoutingModule } from './list-purchase-routing.module';
import { ListPurchaseComponent } from './list-purchase.component';


@NgModule({
  declarations: [
    ListPurchaseComponent
  ],
  imports: [
    CommonModule,
    ListPurchaseRoutingModule
  ]
})
export class ListPurchaseModule { }
