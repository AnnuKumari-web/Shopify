import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from '../../cart-page/cart-page.component';
import { Routes } from '@angular/router';
import { ProductListComponent } from '../../product-list/product-list.component';

// const routes: Routes = [
//   {
//     path:'', redirectTo:'products', pathMatch:'full'
//   },
//   {
//     path: 'products', component: ProductListComponent
//   },
//   {
//     path: 'cart', component: CartComponent
//   }
// ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductRoutingModule { }
