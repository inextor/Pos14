import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintReturnReceiptComponent } from './print-return-receipt.component';

const routes: Routes = [{ path: '', component: PrintReturnReceiptComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintReturnReceiptRoutingModule { }
