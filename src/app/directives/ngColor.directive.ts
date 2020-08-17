import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  constructor(private el: ElementRef) { 
    console.log("Element ref: ",el );
    this.el.nativeElement.style.backgroundColor = 'red';
  }

}
