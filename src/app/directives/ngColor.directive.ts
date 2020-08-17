import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @Input('appNgColor') color: string;
  @Input() secondColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    console.log('Mouse Enter')
    this.changeColor(this.color);
  }
  @HostListener('mouseleave') onMouseLeave(){
    console.log('Mouse Leave')
    this.changeColor(this.secondColor);
  }

  constructor(private el: ElementRef) { 
    console.log("Element ref: ",el );
    this.el.nativeElement.style.backgroundColor = 'red';
  }
  changeColor(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }


}
