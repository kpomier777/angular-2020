import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nuevo-proyecto';
  name: string ='kevin';
  mascotas=[
    {nombre: "choco", color: "cafe", edad: 2, vacunado: true},
    {nombre: "perla", color: "amarillo", edad: 4 , vacunado: false},
    {nombre: "jorge", color: "cafe", edad: 5, vacunado: false},
    {nombre: "beto", color: "negro", edad: 5 , vacunado: true},
    {nombre: "berni", color: "negro", edad: 4, vacunado: true},
    {nombre: "cuki", color: "negro", edad: 7 , vacunado: false},
    {nombre: "lobo", color: "amarillo", edad: 1 , vacunado: false},
    {nombre: "bozer", color: "negro", edad: 4 , vacunado: true},
    {nombre: "dormilon", color: "cafe", edad: 4 , vacunado: false},
    {nombre: "vandido", color: 75, edad: 5 , vacunado: false}
    ]
    vacu=this.mascotas.filter(m=> m.vacunado);
    novacu=this.mascotas.filter(m=> !m.vacunado);
    vacunados=this.vacu.length;
    novacunados=this.novacu.length;

ngOnInit(){

}

vacunar(mascota){
    const index = this.novacu.findIndex(s=>s ===mascota);
    this.novacu.splice(index,1);
    this.vacu.push(mascota)
}

}
