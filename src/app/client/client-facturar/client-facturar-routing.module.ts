import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFacturarComponent } from './client-facturar.component';

const routes: Routes = [{ path: '', component: ClientFacturarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientFacturarRoutingModule { }
