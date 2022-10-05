import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplitOrderComponent } from './split-order.component';

const routes: Routes = [{ path: '', component: SplitOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplitOrderRoutingModule { }
