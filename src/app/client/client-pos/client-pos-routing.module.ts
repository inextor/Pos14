import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPosComponent } from './client-pos.component';

const routes: Routes = [{ path: '', component: ClientPosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPosRoutingModule { }
