import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  productSubs: Subscription;
  productForm: FormGroup;
  products = [];
  productSubsget: Subscription;

  // nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder, private productservice: ProductService) {
    

  }
  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productSubs ? this.productSubsget.unsubscribe() : '';
  }

  ngOnInit(): void {

    this.loadProducts();
    this.productForm = this.formBuilder.group({
      description: ['Descrition', [ Validators.required, Validators.minLength(3)]],
      imageUrl: '',
      ownerId: '',
      price: '',
      titulo: ''
    });

  }
  loadProducts(): void{
    this.products = [];
    this.productSubsget = this.productservice.getProduct().subscribe(res => {
      Object.entries(res).map((p: any)=> this.products.push({id: p[0], ...p[1]}));
      console.log('Respueta: ', this.products)
    } );
  }


  onEnviar2(): void {
    console.log('FORM GROUP: ', this.productForm.value);
    this.productSubs = this.productservice.addProduct(this.productForm.value).subscribe(
    res => {
      console.log('RESP: ', res);
      this.loadProducts();
    },
    err => {
      console.log('ERROR DE SERVIDOR');
    }
  );
  }

  ondelete(id: any){
    this.productservice.deleteProduct(id).subscribe(res => {
      console.log('Response',res)
      this.loadProducts();
    },
      err=>{
        console.log('Error')
      }
    );
  }
}
