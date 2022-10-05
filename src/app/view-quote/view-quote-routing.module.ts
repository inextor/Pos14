import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewQuoteComponent } from './view-quote.component';

const routes: Routes = [{ path: '', component: ViewQuoteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewQuoteRoutingModule { }
