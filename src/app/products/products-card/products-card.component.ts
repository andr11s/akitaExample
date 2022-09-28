import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsCart, ProductsState } from 'src/app/models/products.model';
import { ProductsCardService } from 'src/app/services/products-card.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {
  @Input() products!: ProductsState[] | null; 
  productsCards!: Observable<ProductsCart[]>

  constructor(private productsCard: ProductsCardService) { }

  ngOnInit(): void {
  }
 
  addCartProducts(productId:string){
     this.productsCard.addProductCart({id: productId})
  }
}
