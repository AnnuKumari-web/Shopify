import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../product-list.component';
import { CartPageComponent } from '../../cart-page/cart-page.component';
import { EditProductComponent } from 'src/app/module/edit-product/edit-product.component';

const productRoutes: Routes = [
  {
    path: '', component: ProductListComponent
  },
  {
    path: 'products/edit-product/:id', component: EditProductComponent
  },
  {
    path: 'cart', component: CartPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
