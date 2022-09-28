import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsState } from '../models/products.model';
import { ProductsService } from '../services/products.service';
import { ProductsQuery } from './state/products.query';
import { ProductsStateV2 } from './state/products.store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  listProducts$!:  Observable<ProductsState[]>;
  formProducts!: FormGroup;
  
  constructor(private productsService: ProductsService, private formBuilder: FormBuilder ) {
    this.productsService.getProductsApi();
   }

  ngOnInit(): void {
    this.formProducts = this.formBuilder.group({
      name: new FormControl(''),
      quantity: new FormControl(''),
      price: new FormControl(0), 
    })

   this.listProducts$ = this.productsService.getAllStateProducts();   
  } 
 
  saveProducts(){
    this.productsService.addProduct(this.formProducts.getRawValue())

  }
}
