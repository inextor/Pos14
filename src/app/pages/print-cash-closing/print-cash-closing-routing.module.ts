import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintCashClosingComponent } from './print-cash-closing.component';

const routes: Routes = [{ path: '', component: PrintCashClosingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintCashClosingRoutingModule { }
