import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveCategoryStoreComponent } from './save-category-store.component';

const routes: Routes = [{ path: '', component: SaveCategoryStoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveCategoryStoreRoutingModule { }
