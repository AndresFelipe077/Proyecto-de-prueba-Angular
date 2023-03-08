import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLstComponent } from './components/product-lst/product-lst.component';
import { ProducDetailComponent } from './components/produc-detail/produc-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProductLstComponent
  },

  {
    path: 'new',
    component: ProductFormComponent
  },
  {
    path: ':id',// parametro de entrada ID || van dos puntos por la ruta que se definio
    component: ProducDetailComponent // Renderizar componente
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
