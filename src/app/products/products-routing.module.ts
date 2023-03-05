import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductLstComponent } from './components/product-lst/product-lst.component';

const routes: Routes = [
  {
    path: 'all',
    component: ProductLstComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
