import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/product-list/product-list.component'
import { CartPageComponent } from './features/cart-page/cart-page.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // change later on with welcome page
  {
    path:'', redirectTo:'products', pathMatch:'full'
  },
  {
    path: 'products', component: ProductListComponent
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
