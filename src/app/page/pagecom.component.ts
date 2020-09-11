import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './pagecom.component.html'
})
export class PagecomComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public onLogout(){
this.authService.logout();
  }

}
