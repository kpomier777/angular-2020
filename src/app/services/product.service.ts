import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {

constructor(private http: HttpClient) { }

public getProduct(): Observable<any>{
  return this.http.get('https://angular2020page.firebaseio.com/products.json');
}
public addProduct(product: any): Observable<any>{
  return this.http.post('https://angular2020page.firebaseio.com/products.json',product);
}

}

