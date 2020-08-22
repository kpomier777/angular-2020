import { Routes, RouterModule } from '@angular/router';
import {UsercomComponent} from './usercom/usercom.component'
const routes: Routes = [
  { path: '', component: UsercomComponent}
];

export const UserRoutes = RouterModule.forChild(routes);
