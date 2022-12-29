import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { ProductCardComponent } from './features/product-list/product-card/product-card.component';
import { SearchComponent } from './features/product-list/search/search.component';
import { ProductManageFormComponent } from './module/product-manage-form/product-manage-form.component';
import { CartComponent } from './core/header/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CartPageComponent } from './features/cart-page/cart-page.component';
import { CardTopComponent } from './features/card-top/card-top.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './features/product-list/add-product/add-product.component';
import { EditProductComponent } from './features/product-list/edit-product/edit-product.component';
import { PriceFormatPipe } from './shared/pipes/price-format.pipe';
import { CustomStyleDirective } from './shared/directives/custom-style.directive';
import { SearchInputService } from './shared/services/search-input.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    HomeComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    SearchComponent,
    ProductManageFormComponent,
    CartComponent,
    CartPageComponent,
    CardTopComponent,
    AddProductComponent,
    EditProductComponent,
    PriceFormatPipe,
    CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [SearchInputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
