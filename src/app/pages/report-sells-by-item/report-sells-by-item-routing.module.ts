import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportSellsByItemComponent } from './report-sells-by-item.component';

const routes: Routes = [{ path: '', component: ReportSellsByItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportSellsByItemRoutingModule { }
