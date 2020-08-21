import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Animal1Component} from './components/animal1/animal1.component'
import {Animal2Component} from './components/animal2/animal2.component'
import {SharedModule} from '../shared/shared.module'
import {DoctorModule} from '../doctor/doctor.module'
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DoctorModule
  ],
  declarations: [Animal1Component,Animal2Component],
  exports: [Animal1Component,Animal2Component]
})
export class AnimalModule { }
