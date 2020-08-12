import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nuevo-proyecto';

  aw=true;
  person = ["viviana", "marcelo", "marco", "guadalupe" ]
ngOnInit(){

}

clickSaveChild(event){
console.log("EVENT CHILD: ", event)

}


}
