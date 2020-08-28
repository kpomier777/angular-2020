import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  products = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    //this.products =
    this.productService.getProduct().subscribe(res=> {
     
      //[1,2,3,45,6,]
      //{{ky:1},{key:2},{key:3}}
      //[[key:1],[key:2],[key:3]]
      console.log('Respueta Array: ', Object.entries(res) )
     console.log('Respueta: ', res)
     

     Object.entries(res).map(p=> this.products.push(p[1]));
   } );
  }

}
