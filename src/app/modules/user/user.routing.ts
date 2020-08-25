import { Routes, RouterModule } from '@angular/router';
import {UsercomComponent} from './usercom/usercom.component'
import {User1Component} from './user1/user1.component'
import {User2Component} from './user2/user2.component'

const routes: Routes = [
  { path: '', component: UsercomComponent,
  children: [{
    path: 'user1', component: User1Component
  },
 {path: 'user2', component: User2Component} 
 ]}
  
];

export const UserRoutes = RouterModule.forChild(routes);
