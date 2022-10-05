import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintReceiptComponent } from './print-receipt.component';

const routes: Routes = [{ path: '', component: PrintReceiptComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintReceiptRoutingModule { }
