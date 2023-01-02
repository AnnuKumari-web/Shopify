import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductListService } from '../Services/product-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductRequest: Product = {
    id: '',
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  }
  constructor(private _productListService: ProductListService,private _router: Router) { }

  ngOnInit(): void {
  }

  addProduct(){
    this._productListService.addProduct(this.addProductRequest)
    .subscribe({
      next: (product)=>{
        this._router.navigate(['/products']);     
       }
    });
    
  }
}