import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component'

const routes: Routes = [
  {
    path: '', component: AdminComponent, 
    children: [
        {path: '', redirectTo: 'students', pathMatch:'full'},
     { path: 'students',loadChildren: ()=> import('./student/student.module').then(n => n.StudentModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
   declarations: [
  
  ]
})
export class AdminRoutingModule { }
