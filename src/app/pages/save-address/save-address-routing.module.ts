import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveAddressComponent } from './save-address.component';

const routes: Routes = [{ path: '', component: SaveAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveAddressRoutingModule { }
