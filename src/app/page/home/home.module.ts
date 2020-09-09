import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ProductService} from '../../shared/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component'
const routes: Routes = [
  {path: '', component: HomeComponent}
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [ProductService]
})
export class HomeModule { }
