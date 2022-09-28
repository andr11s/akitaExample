import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  ProductsState } from '../models/products.model';
import { ProductsQuery } from '../products/state/products.query';
import { ProductsStateV2, ProductsStore } from '../products/state/products.store';


/**
 * Products service
 *
 * @export
 * @class ProductsService
 */
@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(private productsQuery: ProductsQuery, private httpClient: HttpClient) { }

  getStateProducts(){
    return this.productsQuery.getProduct();
  }
  
  getAllStateProducts(): Observable<ProductsState[]>{
    return this.productsQuery.selectAll();
  }

  addProduct(product: ProductsState){ 
    this.productsQuery.addProducts(product);
  }

  updatedProduct(product: ProductsState){
    this.productsQuery.updateProduct(product);
  }

  getProductsApi() {
     this.httpClient.get<ProductsState[]>('https://fakestoreapi.com/products').subscribe(x=> {
        console.log('entro',x);
      
        this.productsQuery.setProducts(x);
    });
  }
}
