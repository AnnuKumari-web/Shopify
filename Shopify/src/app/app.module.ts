import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { WelcomeComponent } from './navbar/welcome/welcome.component';
import { HomeComponent } from './navbar/home/home.component';
import { HeaderComponent } from './navbar/header/header.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductCardComponent } from './Product/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    HomeComponent,
    HeaderComponent,
    ProductDetailComponent,
    NavbarComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
