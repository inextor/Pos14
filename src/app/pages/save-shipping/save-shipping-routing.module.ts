import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveShippingComponent } from './save-shipping.component';

const routes: Routes = [{ path: '', component: SaveShippingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveShippingRoutingModule { }
