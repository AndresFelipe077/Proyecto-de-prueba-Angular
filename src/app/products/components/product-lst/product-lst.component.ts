import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-lst',
  templateUrl: './product-lst.component.html',
  styleUrls: ['./product-lst.component.css']
})
export class ProductLstComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      title: 'Producto 1',
      price: 1300,
      text: 'super desayuno',
      image: 'assets/images/5456.jpg'
    },

    {
      id: 2,
      title: 'Producto 2',
      price: 200,
      text: 'super desayuno',
      image: 'assets/images/5456.jpg'
    },

    {
      id: 3,
      title: 'Producto 3',
      price: 200,
      text: 'super desayuno',
      image: 'assets/images/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.webp'
    },


  ];

  constructor() { }
    
  ngOnInit() { }

  onClickedProduct(id: number) {
    console.log('clicked', id);
  }

}
