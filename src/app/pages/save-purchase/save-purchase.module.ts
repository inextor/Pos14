import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavePurchaseRoutingModule } from './save-purchase-routing.module';
import { SavePurchaseComponent } from './save-purchase.component';


@NgModule({
  declarations: [
    SavePurchaseComponent
  ],
  imports: [
    CommonModule,
    SavePurchaseRoutingModule
  ]
})
export class SavePurchaseModule { }
