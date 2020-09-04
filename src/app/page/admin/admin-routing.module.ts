import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component'
//import { TallaPipe } from './talla.pipe';
const routes: Routes = [
  {path: '', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
   declarations: [

  ]
})
export class AdminRoutingModule { }
