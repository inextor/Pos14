import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportSellsByCategoryRoutingModule } from './report-sells-by-category-routing.module';
import { ReportSellsByCategoryComponent } from './report-sells-by-category.component';


@NgModule({
  declarations: [
    ReportSellsByCategoryComponent
  ],
  imports: [
    CommonModule,
    ReportSellsByCategoryRoutingModule
  ]
})
export class ReportSellsByCategoryModule { }
