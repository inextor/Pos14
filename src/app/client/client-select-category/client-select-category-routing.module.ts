import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSelectCategoryComponent } from './client-select-category.component';

const routes: Routes = [{ path: '', component: ClientSelectCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSelectCategoryRoutingModule { }
