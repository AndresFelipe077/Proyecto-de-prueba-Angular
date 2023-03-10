import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@products/models/product.model';
import { ProductService } from '@products/services/product.service';

@Component({
  selector: 'app-product-lst',
  templateUrl: './product-lst.component.html',
  styleUrls: ['./product-lst.component.css']
})

export class ProductLstComponent implements OnInit {

  products: Product[] = [];
 

  constructor(
    private productService:ProductService,
    private router: Router
  ) { }
    
  ngOnInit() { //componente para cargar por primera vez
    this.products= this.productService.getAllProducts();
  }

  onClickedProduct(id: number) {
    console.log('clicked', id);
    this.router.navigate(['/products',id]);// nos ayuda a navegar en la pagina, ira a por ejemplo products/1
  }

}
