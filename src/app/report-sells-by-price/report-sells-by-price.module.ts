import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportSellsByPriceRoutingModule } from './report-sells-by-price-routing.module';
import { ReportSellsByPriceComponent } from './report-sells-by-price.component';


@NgModule({
  declarations: [
    ReportSellsByPriceComponent
  ],
  imports: [
    CommonModule,
    ReportSellsByPriceRoutingModule
  ]
})
export class ReportSellsByPriceModule { }
