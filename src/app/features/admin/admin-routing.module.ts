import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductCreateView } from './views/product-create/product-create.view';
import { ProductListView } from './views/product-list/product-list.view';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path:'products', component: ProductListView},
      {path:'product/add', component: ProductCreateView},
      {path:'product/edit/:id', component: ProductCreateView}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
