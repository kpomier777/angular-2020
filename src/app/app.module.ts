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
import {MascotaComponent} from './components/mascota/mascota.component'
import {TruefalsePipe} from './pipes/truefalse.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    MascotaComponent,
    TruefalsePipe
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
