import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list/models/product.model';
import { ProductListService } from '../product-list/Services/product-list.service';
declare var window : any;

@Component({
  selector: 'app-card-top',
  templateUrl: './card-top.component.html',
  styleUrls: ['./card-top.component.css']
})
export class CardTopComponent implements OnInit {
  addORUpdateModal:any;
  addORUpdateModalTitle:string='';
  products : Product[] = [];
  productForm: Product = {
    id: '0',
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  };
  
  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.getProducts();
    this.addORUpdateModal=new window.bootstrap.Modal(
      document.getElementById("addORUpdateModal")
    )
  }

  getProducts(){
    this.productListService.getProducts()
    .subscribe({
      next:(data)=>{
        this.products= data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  openAddOrUpdateModal(productId: string){
    if(productId === "0"){
      this.addORUpdateModalTitle='Add Product';
      this.productForm = {
        id: '0',
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
      }
    }else{
      this.addORUpdateModalTitle='Update Product';
      this.productForm =  this.products.filter(p => p.id===productId)[0];
    }
    this.addORUpdateModal.show();
  }

  createOrUpdate(){
    if(this.productForm.id === '0'){
      this.productListService.addProduct(this.productForm)
      .subscribe({
        next:(data)=>{
          this.products.unshift(data);
          this.addORUpdateModal.hide();
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
    else{
      this.productListService.updateProduct('8e01077f-67f2-4add-b4e5-4413ff4b2aa5',this.productForm)
      .subscribe({
        next:(data)=>{
          this.products=this.products.filter(s=> s.id !== data.id);
          this.products.unshift(data);
          this.addORUpdateModal.hide();
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  }
}
