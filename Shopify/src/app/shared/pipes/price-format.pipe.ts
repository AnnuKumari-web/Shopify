import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: number,currencyType:string ){
   
   return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currencyType ,
    minimumFractionDigits: 2,
  }).format(Number(value));
  }

}
