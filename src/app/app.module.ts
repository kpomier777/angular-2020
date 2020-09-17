import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import {AuthGuard} from './shared/guard/auth.guard'
import { AuthService } from './shared/services/auth.service';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {metaReducers} from './core/meta';
import {reducers} from './core';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login',loadChildren: ()=> import('./login/login.module').then(n => n.LoginModule) },
  { path: 'admin',loadChildren: ()=> import('./admin/admin.module').then(n => n.AdminModule),
  canActivate: [AuthGuard]
}
];

@NgModule({
  declarations: [
    AppComponent
   ],

  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,

    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({name: 'Angular Course', logOnly: environment.production})
  
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
