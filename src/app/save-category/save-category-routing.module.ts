import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveCategoryComponent } from './save-category.component';

const routes: Routes = [{ path: '', component: SaveCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveCategoryRoutingModule { }
