import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportSellsByCategoryComponent } from './report-sells-by-category.component';

const routes: Routes = [{ path: '', component: ReportSellsByCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportSellsByCategoryRoutingModule { }
