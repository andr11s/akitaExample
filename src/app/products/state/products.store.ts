import { Injectable } from '@angular/core';
import { EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
import { ProductsState } from '../../models/products.model';

  
export interface ProductsStateV2 extends EntityState<ProductsState, string> {}
 
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsStateV2,ProductsState> {
 
}
