import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportSellsByPriceComponent } from './report-sells-by-price.component';

const routes: Routes = [{ path: '', component: ReportSellsByPriceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportSellsByPriceRoutingModule { }
