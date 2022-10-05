import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPurchaseComponent } from './view-purchase.component';

const routes: Routes = [{ path: '', component: ViewPurchaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPurchaseRoutingModule { }
