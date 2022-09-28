import { Injectable } from '@angular/core';
import { Query, QueryEntity } from '@datorama/akita'; 
import { ProductsCart } from 'src/app/models/products.model';
import { ProductsCardState, ProductsCardStore } from './products-card.store';
 

/**
 * ProductsCard query
 *
 * @export
 * @class ProductsCardQuery
 * @extends {Query<ProductsCardState>}
 */
@Injectable({ providedIn: 'root' })
export class ProductsCardQuery extends QueryEntity<ProductsCardState,ProductsCart> {

  constructor(protected store: ProductsCardStore) {
    super(store);
  }

  addProductsCart(productCard: ProductsCart){
      this.store.add(productCard);
  }
}
