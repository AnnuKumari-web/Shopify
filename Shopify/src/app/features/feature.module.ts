import { NgModule } from '@angular/core';
import { CardTopComponent } from './card-top/card-top.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-list/product-routing/product-routing.module';

@NgModule({
  declarations: [
    CardTopComponent,
    CartPageComponent,
    ProductDetailsComponent,
  ],
  imports: [
    ProductRoutingModule,
    SharedModule,
  ],
  exports: [ 
    CardTopComponent,
    CartPageComponent,
    ProductDetailsComponent,
  ]
})
export class FeatureModule { }