import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavePriceListRoutingModule } from './save-price-list-routing.module';
import { SavePriceListComponent } from './save-price-list.component';


@NgModule({
  declarations: [
    SavePriceListComponent
  ],
  imports: [
    CommonModule,
    SavePriceListRoutingModule
  ]
})
export class SavePriceListModule { }
