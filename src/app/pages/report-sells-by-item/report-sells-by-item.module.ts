import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportSellsByItemRoutingModule } from './report-sells-by-item-routing.module';
import { ReportSellsByItemComponent } from './report-sells-by-item.component';


@NgModule({
  declarations: [
    ReportSellsByItemComponent
  ],
  imports: [
    CommonModule,
    ReportSellsByItemRoutingModule
  ]
})
export class ReportSellsByItemModule { }
