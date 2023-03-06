import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductLstComponent } from './components/product-lst/product-lst.component';
import { SharedModule } from '@shared/shared.module';
import { ProducDetailComponent } from './components/produc-detail/produc-detail.component';
import { ProductService } from './services/product.service';


@NgModule({
    declarations: [
        ProductComponent,
        ProductLstComponent,
        ProducDetailComponent
    ],
    providers: [
        ProductService,
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule
    ]
})
export class ProductsModule { }
