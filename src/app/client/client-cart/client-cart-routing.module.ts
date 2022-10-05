import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCartComponent } from './client-cart.component';

const routes: Routes = [{ path: '', component: ClientCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientCartRoutingModule { }
