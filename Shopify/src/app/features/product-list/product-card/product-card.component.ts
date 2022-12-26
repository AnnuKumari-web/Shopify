import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() products:any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products?.forEach((a: any) => {
      Object.assign(a,{quantity:1,total:a.price});
    });
  }

  addToCart(item: any){
    this.cartService.addToCart(item);
  }
}
