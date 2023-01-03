import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTopComponent } from './card-top/card-top.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { EditProductComponent } from '../module/edit-product/edit-product.component';
import { ProductRoutingModule } from './product-list/product-routing/product-routing.module';

@NgModule({
  declarations: [
    CardTopComponent,
    CartPageComponent,
    ProductDetailsComponent,
    EditProductComponent,
  ],
  imports: [
    ProductRoutingModule,
    SharedModule,
  ],
  exports: [ 
    CardTopComponent,
    CartPageComponent,
    ProductDetailsComponent,
    EditProductComponent,
  ]
})
export class FeatureModule { }