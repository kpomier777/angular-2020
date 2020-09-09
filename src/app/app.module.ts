import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login',loadChildren: ()=> import('./login/login.module').then(n => n.LoginModule) },
  { path: 'page',loadChildren: ()=> import('./page/page.module').then(n => n.PageModule) }
];

@NgModule({
  declarations: [
    AppComponent
   ],

  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
