import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveQuoteComponent } from './save-quote.component';

const routes: Routes = [{ path: '', component: SaveQuoteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveQuoteRoutingModule { }
