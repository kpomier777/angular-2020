import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public onLogout(){
     this.authService.logout();
  }

}
