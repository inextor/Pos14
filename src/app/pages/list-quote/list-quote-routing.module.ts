import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuoteComponent } from './list-quote.component';

const routes: Routes = [{ path: '', component: ListQuoteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListQuoteRoutingModule { }
