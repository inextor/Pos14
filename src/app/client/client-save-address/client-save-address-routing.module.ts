import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSaveAddressComponent } from './client-save-address.component';

const routes: Routes = [{ path: '', component: ClientSaveAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSaveAddressRoutingModule { }
