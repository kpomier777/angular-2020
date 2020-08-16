import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { PersonaModule } from './modules/persona/persona.module';
import {ProductoModule} from './modules/producto/producto.module'
@NgModule({
  declarations: [				
    AppComponent   
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonaModule,
ProductoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
