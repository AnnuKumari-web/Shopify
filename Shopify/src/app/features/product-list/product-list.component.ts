import { Component, OnInit } from '@angular/core';
import { ProductListService } from './Services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public productList: any;

  constructor(private productListService: ProductListService) {}

  ngOnInit(): void {
    this.productListService.getProducts().subscribe((res) => {
      this.productList = res;
    });
  }

}
