import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsCart } from '../models/products.model';
import { ProductsCardQuery } from '../products/products-card/state/products-card.query';

@Injectable({
  providedIn: 'root'
})
export class ProductsCardService {

  constructor(private storeQuery: ProductsCardQuery) { }

  getProductsCard(): Observable<ProductsCart[]>{
   return this.storeQuery.selectAll();
  }

  addProductCart(productCard:ProductsCart){
    this.storeQuery.addProductsCart(productCard);
  }
}
