import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { WelcomeComponent } from './core/navbar/welcome/welcome.component';
import { HomeComponent } from './core/navbar/home/home.component';
import { HeaderComponent } from './core/navbar/header/header.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ProductCardComponent } from './features/product-list/product-card/product-card.component';
import { SearchComponent } from './module/search/search.component';
import { ProductManageFormComponent } from './module/product-manage-form/product-manage-form.component';
import { CartComponent } from './core/navbar/header/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListModule } from './features/product-list/product-list.module';
import { CartPageComponent } from './features/cart-page/cart-page.component';
import { CardTopComponent } from './features/card-top/card-top.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    HomeComponent,
    HeaderComponent,
    ProductDetailsComponent,
    NavbarComponent,
    ProductCardComponent,
    SearchComponent,
    ProductManageFormComponent,
    CartComponent,
    CartPageComponent,
    CardTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
