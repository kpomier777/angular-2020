import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Owner1Component} from './components/owner1/owner1.component'
import {Owner2Component} from './components/owner2/owner2.component'
import {SharedModule} from '../shared/shared.module'
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [Owner1Component,Owner2Component],
  exports: [Owner1Component,Owner2Component]
})
export class OwnerModule { }
