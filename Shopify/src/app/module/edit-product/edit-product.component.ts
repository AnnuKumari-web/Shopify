import { Component, OnInit } from '@angular/core';
import { Product } from '../../features/product-list/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../../features/product-list/Services/product-list.service';


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
    alert('Do you want this product to get deleted?');
    this._productListService.deleteProduct(id).subscribe({
      next: (response) => {
        this.router.navigate(['/products']);
      },
    });
  }
}
