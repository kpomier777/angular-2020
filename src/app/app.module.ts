import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { PersonaModule } from './modules/persona/persona.module';
import {ProductoModule} from './modules/producto/producto.module';
import {AdminModule} from './modules/admin/admin.module';
import {UserModule} from './modules/user/user.module';
import {TestPipe} from './pipes/test.pipe';
import {ExpoPipe} from './pipes/expo.pipe';
import {PurePipe} from './pipes/pure.pipe';
import {InpurePipe} from './pipes/inpure.pipe';
import {NgColorDirective} from './directives/ngColor.directive'
import {TestComponent} from './components/test/test.component'
import {NgFocusDirective} from './directives/ngFocus.directive'
@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    ExpoPipe,
    PurePipe,
    NgFocusDirective,
    InpurePipe,
    NgColorDirective,
    TestComponent
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonaModule,
    ProductoModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
