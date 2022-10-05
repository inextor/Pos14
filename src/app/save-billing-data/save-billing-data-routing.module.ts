import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveBillingDataComponent } from './save-billing-data.component';

const routes: Routes = [{ path: '', component: SaveBillingDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveBillingDataRoutingModule { }
