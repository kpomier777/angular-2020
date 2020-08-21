import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Doctor1Component} from './components/doctor1/doctor1.component'
import {Doctor2Component} from './components/doctor2/doctor2.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Doctor1Component,Doctor2Component],
  exports: [Doctor1Component,Doctor2Component]
})
export class DoctorModule { }
