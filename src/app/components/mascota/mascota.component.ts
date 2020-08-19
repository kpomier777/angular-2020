import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mascota',
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
