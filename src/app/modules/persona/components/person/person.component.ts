import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']


})
export class PersonComponent implements OnInit {
@Input() name:string;
  @Input() lastName:string;
  @Input() age:number;
  @Input() enable:boolean;
  constructor() { }

  ngOnInit() {
  }

}
