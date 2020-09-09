import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  products = [];
  productSubs: Subscription;
  constructor(private productService: ProductService) { }
  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
  }

  ngOnInit(): void {

     //this.products =
     this.productSubs = this.productService.getProduct().subscribe(res => {
     
      //[1,2,3,45,6,]
      //{{ky:1},{key:2},{key:3}}
      //[[key:1],[key:2],[key:3]]
      console.log('Respueta Array: ', Object.entries(res) )
     console.log('Respueta: ', res)
     

     Object.entries(res).map(p=> this.products.push(p[1]));
   } );
  }

}
