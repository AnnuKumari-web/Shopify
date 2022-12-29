import { Component, OnInit } from '@angular/core';
import { ProductListService } from './Services/product-list.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productListService: ProductListService) {}

  ngOnInit(): void {
    this.productListService.getProducts().subscribe({
      next: (products) =>{
        this.productList = products;
      },
      error: (response)=>{
        console.log(response);
      }
    });
  }
}
