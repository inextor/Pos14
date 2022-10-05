import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavePriceTypeComponent } from './save-price-type.component';

const routes: Routes = [{ path: '', component: SavePriceTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavePriceTypeRoutingModule { }
