import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

  url = environment.auth.apiBaseUrl
  key = environment.auth.key
constructor(private http: HttpClient, private router: Router) { }

public login(body: any): Observable<any> {
  return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body).pipe(
    map( (res: any) =>{ 
      this.authSucces(res.idToken, res.localId);
      return res
    })
  );
  
}

private authSucces(token: string, id: string): void{
   
  localStorage.setItem('token',token);
   localStorage.setItem('userId',id);

}

public getToken(): string{
  return localStorage.getItem('token')
}

public getUserId(): string{
  return localStorage.getItem('userId')
}

public verifyLogged(): boolean{
const tok =localStorage.getItem('token')
  return !!tok
}
public logout(){
  this.router.navigate(['login']);
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
}

}

