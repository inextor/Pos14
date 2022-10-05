import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintQuoteComponent } from './print-quote.component';

const routes: Routes = [{ path: '', component: PrintQuoteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintQuoteRoutingModule { }
