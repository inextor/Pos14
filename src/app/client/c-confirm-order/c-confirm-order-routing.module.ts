import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CConfirmOrderComponent } from './c-confirm-order.component';

const routes: Routes = [{ path: '', component: CConfirmOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CConfirmOrderRoutingModule { }
