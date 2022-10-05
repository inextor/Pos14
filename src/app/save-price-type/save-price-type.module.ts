import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavePriceTypeRoutingModule } from './save-price-type-routing.module';
import { SavePriceTypeComponent } from './save-price-type.component';


@NgModule({
  declarations: [
    SavePriceTypeComponent
  ],
  imports: [
    CommonModule,
    SavePriceTypeRoutingModule
  ]
})
export class SavePriceTypeModule { }
