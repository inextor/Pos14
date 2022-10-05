import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavePurchaseComponent } from './save-purchase.component';

const routes: Routes = [{ path: '', component: SavePurchaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavePurchaseRoutingModule { }
