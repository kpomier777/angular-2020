import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AnimalModule} from './modules/animal/animal.module'
import {OwnerModule} from './modules/owner/owner.module'
@NgModule({
  declarations: [
    
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimalModule,
    OwnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
