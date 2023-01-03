import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStyleDirective } from './directives/custom-style.directive';
import { PriceFormatPipe } from './pipes/price-format.pipe';
import { SearchInputService } from './services/search-input.service';

@NgModule({
  declarations: [
    CustomStyleDirective,
    PriceFormatPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CustomStyleDirective,
    PriceFormatPipe,
  ],
  providers: [SearchInputService],
})
export class SharedModule { }
