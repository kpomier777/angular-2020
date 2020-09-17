import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentComponent} from './student.component'
import {ReactiveFormsModule} from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Routes, RouterModule } from '@angular/router';
import {GradePipe} from '../grade.pipe'
const routes: Routes = [
  {path: '', component: StudentComponent}
];
@NgModule({
  declarations: [StudentComponent, GradePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  providers: [ProductService]
})
export class StudentModule { }
