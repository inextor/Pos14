import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockSearchReportRoutingModule } from './stock-search-report-routing.module';
import { StockSearchReportComponent } from './stock-search-report.component';


@NgModule({
  declarations: [
    StockSearchReportComponent
  ],
  imports: [
    CommonModule,
    StockSearchReportRoutingModule
  ]
})
export class StockSearchReportModule { }
