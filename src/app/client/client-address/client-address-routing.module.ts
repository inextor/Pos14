import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientAddressComponent } from './client-address.component';

const routes: Routes = [{ path: '', component: ClientAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAddressRoutingModule { }
