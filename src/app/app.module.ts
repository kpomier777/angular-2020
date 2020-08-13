import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { PersonaModule } from './modules/persona/persona.module';

@NgModule({
  declarations: [				
    AppComponent   
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
