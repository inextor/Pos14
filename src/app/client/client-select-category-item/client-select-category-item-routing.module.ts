import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSelectCategoryItemComponent } from './client-select-category-item.component';

const routes: Routes = [{ path: '', component: ClientSelectCategoryItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSelectCategoryItemRoutingModule { }
