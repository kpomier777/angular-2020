import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagecomComponent} from './pagecom/pagecom.component'
import {MatButtonModule} from '@angular/material/button';

import { PageRoutingModule } from './page-routing.module';


@NgModule({
  declarations: [PagecomComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatButtonModule
  ]
})
export class PageModule { }
