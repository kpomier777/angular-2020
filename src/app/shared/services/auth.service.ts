import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()

export class AuthService {

  url = environment.auth.apiBaseUrl
  key = environment.auth.key
constructor(private http: HttpClient) { }

public login(body: any): Observable<any> {
  return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body).pipe(
    map( (res: any) =>{ 
      this.authSucces(res.idToken);
      return res
    })
  );
  
}

private authSucces(token: string): void{
   localStorage.setItem('auth',token);
}
}

