import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { ProductListComponent } from './Product/product-list/product-list.component'
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent},
  { path: 'product-detail', component: ProductDetailComponent},
  { path: 'more', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
