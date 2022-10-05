import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturacionPeriodoComponent } from './facturacion-periodo.component';

const routes: Routes = [{ path: '', component: FacturacionPeriodoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturacionPeriodoRoutingModule { }
