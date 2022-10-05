import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSelectMapAddressComponent } from './client-select-map-address.component';

const routes: Routes = [{ path: '', component: ClientSelectMapAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSelectMapAddressRoutingModule { }
