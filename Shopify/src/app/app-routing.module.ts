import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component'
import { CartPageComponent } from './features/cart-page/cart-page.component';
import { HomeComponent } from './core/home/home.component';
import { EditProductComponent } from './module/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'products', component: ProductListComponent
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
