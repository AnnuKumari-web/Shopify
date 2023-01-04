import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FeatureModule } from '../feature.module';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
    SharedModule,
    FeatureModule
  ],
  exports: [
    ProductCardComponent,
    ProductListComponent,
  ]
})
export class ProductListModule { }
