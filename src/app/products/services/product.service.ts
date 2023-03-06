import { Injectable } from '@angular/core';
import { Product } from '@products/models/product.model';

@Injectable()
export class ProductService {
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

  getAllProducts(){
    return this.products;
  }

  getProduct(productId:number){
    return this.products.find(product=>product.id==productId);
  }
}
