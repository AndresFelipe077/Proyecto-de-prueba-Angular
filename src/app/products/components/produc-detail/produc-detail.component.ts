import { Component } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

import { Product } from '@products/models/product.model';
import { ProductService } from '@products/services/product.service';

@Component({
  selector: 'app-produc-detail',
  templateUrl: './produc-detail.component.html',
  styleUrls: ['./produc-detail.component.css']
})
export class ProducDetailComponent {

product!: Product;
  

 constructor(
  private activateRoute:ActivatedRoute,
  private productService:ProductService
 ){

 
 }

 ngOnInit(){
  this.activateRoute.params
  .subscribe((params:Params)=>
    {
      const id= params['id'];
      this.product = this.productService.getProduct(id);
    });
 }
}
