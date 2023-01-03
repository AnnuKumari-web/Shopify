import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { SearchComponent } from './module/search/search.component';
import { ProductManageFormComponent } from './module/product-manage-form/product-manage-form.component';
import { CartComponent } from './module/cart/cart.component';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './features/feature.module';
import { ProductListModule } from './features/product-list/product-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    ProductManageFormComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FeatureModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
