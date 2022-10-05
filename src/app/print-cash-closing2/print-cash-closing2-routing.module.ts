import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintCashClosing2Component } from './print-cash-closing2.component';

const routes: Routes = [{ path: '', component: PrintCashClosing2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintCashClosing2RoutingModule { }
