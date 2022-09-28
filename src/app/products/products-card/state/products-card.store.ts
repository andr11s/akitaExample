import { Injectable } from '@angular/core';
import { EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
import { ProductsCart } from 'src/app/models/products.model';

  
export interface ProductsCardState extends EntityState<ProductsCart, string> {}

/**
 * ProductsCard store
 *
 * @export
 * @class ProductsCardStore
 * @extends {Store<ProductsCardState>}
 */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products-card' })
export class ProductsCardStore extends EntityStore<ProductsCardState,ProductsCart> { 
}
