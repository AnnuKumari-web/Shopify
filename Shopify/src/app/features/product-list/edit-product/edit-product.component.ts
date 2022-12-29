import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../Services/product-list.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productDetails: Product = {
    id: '',
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  };
  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private _productListService: ProductListService
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          //call api
          this._productListService.getProduct(id).subscribe({
            next: (response) => {
              this.productDetails = response;
            },
          });
        }
      },
    });
  }

  updateProduct() {
    this._productListService
      .updateProduct(this.productDetails.id, this.productDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/products']);
        },
      });
  }

  deleteProduct(id: string) {
    this._productListService.deleteProduct(id).subscribe({
      next: (response) => {
        this.router.navigate(['/products']);
      },
    });
  }
}
