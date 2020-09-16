import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Subscribable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import {AddProduct} from './store/home.actions'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  products = [];
  productSubs: Subscription;
  homeSubs: Subscription;
  cart = [];
  constructor(private store: Store<any>,
    private productService: ProductService) { }
  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.homeSubs ? this.homeSubs.unsubscribe() : '';
  }

  ngOnInit(): void {

    this.homeSubs = this.store.select(s => s.home).subscribe(res => {
      this.cart = Object.assign([], res.items);
      // JSON.parse((JSON.stringify(res))
    });

     this.productSubs = this.productService.getProduct().subscribe(res => {
     
  
      console.log('Respueta Array: ', Object.entries(res) )
     console.log('Respueta: ', res)
     

     Object.entries(res).map(p=> this.products.push(p[1]));
   } );

   
  }

  onComprar(product): void {
    this.store.dispatch(AddProduct({product: product}));
  }

}
