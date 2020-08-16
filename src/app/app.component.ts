import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nuevo-proyecto';
  name: string ='kevin';
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
 
ngOnInit(){

}


}
