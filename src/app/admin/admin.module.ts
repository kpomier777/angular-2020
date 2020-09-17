import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component'
import {MatButtonModule} from '@angular/material/button';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule
  ], 
  providers:[
    

  ]
})
export class AdminModule { }
