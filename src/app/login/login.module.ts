import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {AuthService} from  '../shared/services/auth.service'
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component'

const routes: Routes = [
  {path: '', component:LoginComponent}
];

@NgModule({
  declarations: [
    
    LoginComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthService]
})
export class LoginModule { }
