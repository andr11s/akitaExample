import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsCart } from 'src/app/models/products.model';
import { ProductsCardService } from 'src/app/services/products-card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  productsCart!:  ProductsCart[]
  constructor(private productsCartService: ProductsCardService) { }

  ngOnInit(): void {
    this.productsCartService.getProductsCard().subscribe(x=> {
      console.log('x',x);
      
      this.productsCart = x
    } )
  }

}
