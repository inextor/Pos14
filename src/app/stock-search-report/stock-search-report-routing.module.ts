import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockSearchReportComponent } from './stock-search-report.component';

const routes: Routes = [{ path: '', component: StockSearchReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockSearchReportRoutingModule { }
