import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavePriceListComponent } from './save-price-list.component';

const routes: Routes = [{ path: '', component: SavePriceListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavePriceListRoutingModule { }
