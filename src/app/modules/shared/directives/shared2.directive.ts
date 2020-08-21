import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShared2]'
})
export class Shared2Directive {

  constructor(private el: ElementRef) { 
    console.log("Shared 2: ",el );
  }

}
