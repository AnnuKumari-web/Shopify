import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { SearchInputService } from 'src/app/shared/services/search-input.service';
import { Product } from '../models/product.model';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!:Product;
  searchText: string='';
  constant = Constants;
  color1=this.constant.blue;
  color2=this.constant.white;
  border=this.constant.border;
  constructor(private cartService: CartService,private inputService: SearchInputService) { }

  ngOnInit(): void {
  }

  addToCart(item: any){
    this.cartService.addToCart(item);
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

}
