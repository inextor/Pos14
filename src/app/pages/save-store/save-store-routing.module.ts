import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveStoreComponent } from './save-store.component';

const routes: Routes = [{ path: '', component: SaveStoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveStoreRoutingModule { }
