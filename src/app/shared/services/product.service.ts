import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class ProductService {

  url = environment.app.apiBaseUrl;

constructor(private http: HttpClient) { }

public getProduct(): Observable<any>{
  return this.http.get(`${this.url}/students.json`);
}
public getProductById(id : any): Observable<any>{
  return this.http.get(`${this.url}/students.json?orderBy="ownerId"&equalTo="${id}"&print=pretty`);
  
}
public addProduct(product: any): Observable<any>{
  return this.http.post(`${this.url}/students.json`,product);
}
public deleteProduct(id: any): Observable<any>{
  return this.http.delete(`${this.url}/students/${id}.json`);
}
public updateProduct(id: any, product: any): Observable<any>{
  return this.http.put(`${this.url}/students/${id}.json`,product);
}

}

