import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @HostListener('mouseenter') onMouseEnter(){
    console.log('Mouse Enter')
    this.changeColor('red');
  }
  @HostListener('mouseleave') onMouseLeave(){
    console.log('Mouse Leave')
    this.changeColor('lightgreen');
  }

  constructor(private el: ElementRef) { 
    console.log("Element ref: ",el );
    this.el.nativeElement.style.backgroundColor = 'red';
  }
  changeColor(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }


}
