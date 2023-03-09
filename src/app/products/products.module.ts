import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductLstComponent } from './components/product-lst/product-lst.component';
import { SharedModule } from '@shared/shared.module';
import { ProducDetailComponent } from './components/produc-detail/produc-detail.component';
import { ProductService } from './services/product.service';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material/material.module';


@NgModule({
    declarations: [
        ProductComponent,
        ProductLstComponent,
        ProducDetailComponent,
        ProductFormComponent
        

        
    ],

    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MaterialModule 
    ],
    providers: [
        ProductService,
    ]
   
})
export class ProductsModule { }
