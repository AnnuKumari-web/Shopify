import { Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  @Input() color1='';
  @Input() border='';
  @Input() color2='';
  @Output() elementRef = new EventEmitter<ElementRef>();

  constructor(private el: ElementRef) { 
  }

  @HostListener('mouseover') onMouseEnter(){
    this.el.nativeElement.style.background = this.color1;
    this.el.nativeElement.style.border = this.border;
  }
  @HostListener('mouseleave') onMouseExit(){
    this.el.nativeElement.style.background = this.color2;
    this.el.nativeElement.style.border = 'none';
  }

}
