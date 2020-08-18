import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div style="border: 2px solid red;">
   <p> Name: {{name}}</p>
   <p> Last name: {{lastname}}</p>
</div>`,
  styles: [``]
})
export class TestComponent implements OnInit, OnChanges {

  intermediaria: string;
  @Input()
    get name(){
      return this.intermediaria;
    }
    set name(name: string){
      this.intermediaria='AAAAAAA'+name;
    }
  @Input() lastname:string;

  constructor() { }

  ngOnInit() {
    console.log("On init", this.name);
  }

  ngOnChanges(changes: SimpleChange){
    if(changes && changes.lastname && changes.lastname.currentValue){
      console.log("On Changes",changes.lastname.currentValue);
      const aux='AAA'+changes.lastname.currentValue;
      this.lastname = aux;
    }
  }

}
