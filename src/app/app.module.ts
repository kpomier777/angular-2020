import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MascotaComponent} from './components/mascota/mascota.component'
import {TruefalasePipe} from './pipes/truefalase.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MascotaComponent,
    TruefalasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
