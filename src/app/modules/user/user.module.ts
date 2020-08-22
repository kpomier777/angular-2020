import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutes } from './user.routing';
import {UsercomComponent} from './usercom/usercom.component'

@NgModule({
  imports: [
    CommonModule,
    UserRoutes
  ],
  declarations: [UsercomComponent]
})
export class UserModule { }
