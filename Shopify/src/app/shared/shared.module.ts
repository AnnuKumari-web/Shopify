import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStyleDirective } from './directives/custom-style.directive';
import { PriceFormatPipe } from './pipes/price-format.pipe';
import { SearchInputService } from './services/search-input.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CustomStyleDirective,
    PriceFormatPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, 
  ],
  exports:[
    CustomStyleDirective,
    PriceFormatPipe,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [SearchInputService],
})
export class SharedModule { }
