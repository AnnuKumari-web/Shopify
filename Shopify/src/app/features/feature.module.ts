import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTopComponent } from './card-top/card-top.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditProductComponent } from '../module/edit-product/edit-product.component';
import { ProductCardComponent } from './product-list/product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    CardTopComponent,
    CartPageComponent,
    ProductDetailsComponent,
    EditProductComponent,
    ProductCardComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
    SharedModule,
  ],
  exports: [
    CardTopComponent,
    CartPageComponent,
    ProductDetailsComponent,
    EditProductComponent,
    ProductCardComponent,
    ProductListComponent
  ]
})
export class FeatureModule { }