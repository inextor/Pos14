import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPurchaseRoutingModule } from './view-purchase-routing.module';
import { ViewPurchaseComponent } from './view-purchase.component';


@NgModule({
  declarations: [
    ViewPurchaseComponent
  ],
  imports: [
    CommonModule,
    ViewPurchaseRoutingModule
  ]
})
export class ViewPurchaseModule { }
