import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductA } from '../utils/context/products/product-a';
import { ProductB } from '../utils/context/products/product-b';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  createProduct(type: string): Product {
    if (type === 'A') {
      return new ProductA();
    } else if (type === 'B') {
      return new ProductB();
    }

    throw new Error('Invalid product type');
  }
  
}
