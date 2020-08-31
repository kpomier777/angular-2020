import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from './login/login.component'
import {MatButtonModule} from '@angular/material/button';
import {NgElseDirective} from '../directives/ngElse.directive'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    LoginComponent, NgElseDirective],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
  ]
})
export class LoginModule { }
