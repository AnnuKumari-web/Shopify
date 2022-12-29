import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component'
import { CartPageComponent } from './features/cart-page/cart-page.component';
import { HomeComponent } from './core/home/home.component';
import { AddProductComponent } from './features/product-list/add-product/add-product.component';
import { EditProductComponent } from './features/product-list/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'products', component: ProductListComponent
  },
  {
    path: 'products/add-product', component: AddProductComponent
  },
  {
    path: 'products/edit-product/:id', component: EditProductComponent
  },
  {
    path: 'cart', component: CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
