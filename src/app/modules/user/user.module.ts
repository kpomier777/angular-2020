import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutes } from './user.routing';
import {UsercomComponent} from './usercom/usercom.component'
import {User1Component} from './user1/user1.component'
import {User2Component} from './user2/user2.component'

@NgModule({
  imports: [
    CommonModule,
    UserRoutes
  ],
  declarations: [UsercomComponent,User1Component,
    User2Component]
})
export class UserModule { }
