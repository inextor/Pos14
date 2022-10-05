import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintCommandaComponent } from './print-commanda.component';

const routes: Routes = [{ path: '', component: PrintCommandaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintCommandaRoutingModule { }
