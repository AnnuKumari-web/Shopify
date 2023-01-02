import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { SearchInputService } from 'src/app/shared/services/search-input.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!:Product;
  color='#73C2FB';
  searchText: string='';
  constructor(private cartService: CartService,private inputService: SearchInputService) { }

  ngOnInit(): void {
    // this.products?.forEach((a: any) => {
    //   Object.assign(a,{quantity:1,total:a.price});
    // });
  }

  addToCart(item: any){
    this.cartService.addToCart(item);
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  
}
