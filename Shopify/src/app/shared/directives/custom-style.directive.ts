import { Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  @Input() color='';
  @Output() elementRef = new EventEmitter<ElementRef>();

  constructor(private el: ElementRef) { 
  }

  @HostListener('mouseover') onMouseEnter(){
    this.el.nativeElement.style.background = this.color;
    this.el.nativeElement.style.border = '2px solid #1F75FE';
  }
  @HostListener('mouseleave') onMouseExit(){
    this.el.nativeElement.style.background = 'white';
    this.el.nativeElement.style.border = 'none';
  }

}
