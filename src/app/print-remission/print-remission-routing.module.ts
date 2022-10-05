import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintRemissionComponent } from './print-remission.component';

const routes: Routes = [{ path: '', component: PrintRemissionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintRemissionRoutingModule { }
