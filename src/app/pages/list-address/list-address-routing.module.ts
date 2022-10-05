import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAddressComponent } from './list-address.component';

const routes: Routes = [{ path: '', component: ListAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAddressRoutingModule { }
