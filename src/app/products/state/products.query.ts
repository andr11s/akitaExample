import { Injectable } from '@angular/core';
import { guid, Query, QueryEntity } from '@datorama/akita';

import { ProductsState } from 'src/app/models/products.model';
import { ProductsStateV2, ProductsStore } from './products.store';
 
 
@Injectable({ providedIn: 'root' })
export class ProductsQuery extends QueryEntity<ProductsStateV2,ProductsState> {
  allState = this.selectAll();

  
  constructor(protected store: ProductsStore) {
    super(store);
  }

  getAllProducts(products:any): ProductsStateV2[]{
    return products;
  }

  getProduct(){
    return this.store.getValue()
  }


  setProducts(products: ProductsState[]){ 
    this.store.set(products);
  }
  addProducts(product: ProductsState){
    product.id = guid();
    this.store.add(product);
  }

  updateProduct(product: ProductsState){
    this.store.update(product);
  }
}
