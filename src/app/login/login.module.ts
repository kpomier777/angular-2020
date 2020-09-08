import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from './login/login.component'
import {MatButtonModule} from '@angular/material/button';
import {NgElseDirective} from '../directives/ngElse.directive'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {AuthService} from  '../services/auth.service'
@NgModule({
  declarations: [
    
    LoginComponent, NgElseDirective],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthService]
})
export class LoginModule { }
