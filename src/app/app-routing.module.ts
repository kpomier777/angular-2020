import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home',loadChildren: ()=> import('./pages/home/home.module').then(n => n.HomeModule) },
  { path: 'admin',loadChildren: ()=> import('./pages/admin/admin.module').then(n => n.AdminModule) },
  { path: 'list',loadChildren: ()=> import('./pages/list/list.module').then(n => n.ListModule) }

];*/

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login',loadChildren: ()=> import('./login/login.module').then(n => n.LoginModule) },
  { path: 'page',loadChildren: ()=> import('./page/page.module').then(n => n.PageModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
