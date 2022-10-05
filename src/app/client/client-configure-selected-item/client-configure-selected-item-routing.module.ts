import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientConfigureSelectedItemComponent } from './client-configure-selected-item.component';

const routes: Routes = [{ path: '', component: ClientConfigureSelectedItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientConfigureSelectedItemRoutingModule { }
