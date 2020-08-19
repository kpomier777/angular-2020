import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'persona',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit {

  @Input() nombre:string;
  @Input() color:string;
  @Input() edad:number;
  @Input() vacunado:boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
