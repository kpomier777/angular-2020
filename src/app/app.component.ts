import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nuevo-proyecto';
  name: string ='kevinTS';
  aw=true;
  lastname="PomierTS";
  personas=[
    { name:'kevin',
      lastName: 'pomier',
      age:21,
      enable: false
    },
    { name:'angel',
      lastName: 'loza',
      age:21,
      enable: true
    },
    { name:'juan',
      lastName: 'salas',
      age:21,
      enable: false
    },
    { name:'jose',
      lastName: 'lopez',
      age:21,
      enable: true
    }
   ]
   numbers=[1,2,3,4,5,6,7,8,9,10]
 
ngOnInit(){
console.log('Pura: '+this.pure(2,2))
console.log('Inpure: '+this.impure(2,2))
}

pure(a: number, b: number){
  return a+b;
}
impure(a: number, b: number){
  return a+b+Math.random()
}


}
