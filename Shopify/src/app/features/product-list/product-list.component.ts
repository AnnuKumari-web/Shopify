import { Component, OnInit } from '@angular/core';
import { ProductListService } from './Services/product-list.service';
import { Product } from './models/product.model';
import { SearchInputService } from 'src/app/shared/services/search-input.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  filteredList: Product[] = [];
  inputText: string='';

  constructor(private productListService: ProductListService,private searchInputService: SearchInputService) {}

  ngOnInit(): void {
    this.productListService.getProducts().subscribe({
      next: (products) =>{
        this.productList = products;
        this.filteredList = products; 
      },
      error: (response)=>{
        console.log(response);
      }
    });

    this.searchInputService.dataEmitter.subscribe((value)=>{
      this.inputText = value;
      this.filteredList = this.productList.filter((product: Product)=>
        product.title.toLocaleLowerCase().indexOf(value) !== -1)
    })
  }

  // Implemented TrackBy
  refresh(){
    this.productListService.getProducts().subscribe({
      next: (products) =>{
        this.productList = products;
        this.filteredList = products; 
      },
      error: (response)=>{
        console.log(response);
      }
    });
  }

  trackByTitle(index: number, item: Product){
    return item.title;
  }
}
