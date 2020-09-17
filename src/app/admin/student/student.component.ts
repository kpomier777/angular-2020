import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import {Subscription} from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Store } from '@ngrx/store';
import { AddProduct } from 'src/app/admin/store/home.actions';
@Component({
  selector: 'app-admin',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit, OnDestroy {


  homeSubs: Subscription;
  cart = [];
  primatia=[];
  secundaria = [];
  peticion: boolean;
  productSubspost: Subscription;
  productForm: FormGroup;
  products = [];
  productSubsget: Subscription;
  productSubsdel: Subscription;
  productSubsput: Subscription;
  idedit: any;

  // nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder,
    private store: Store<any>,
    private authService: AuthService, 
    private productservice: ProductService) {
    

  }
  ngOnDestroy(): void {
    this.productSubspost ? this.productSubspost.unsubscribe() : '';
    this.productSubsget ? this.productSubsget.unsubscribe() : '';
    this.productSubsput ? this.productSubsput.unsubscribe() : '';
    this.productSubsdel ? this.productSubsdel.unsubscribe() : '';
  }

  ngOnInit(): void {

    this.homeSubs = this.store.select(s => s.home).subscribe(res => {
      this.cart = Object.assign([], res.items);
      // JSON.parse((JSON.stringify(res))
    });

    this.loadProducts();
    this.productForm = this.formBuilder.group({
      name: ['', [ Validators.required, Validators.minLength(3)]],
      grade: ['', [ Validators.required]],
      id: '',
      age: '',
      urlImage: ''
    });

  }
  loadProducts(): void{
    this.products = [];
    this.primatia=[];
    this.secundaria = [];
    const userId = this.authService.getUserId();
    this.productSubsget = this.productservice.getProduct().subscribe(res => {
      Object.entries(res).map((p: any)=> this.products.push({id: p[0], ...p[1]}));
      console.log('Respueta: ', this.products)
      this.primatia=this.products.filter(m=> m.grade === "P");
      this.secundaria=this.products.filter(m=> m.grade === "S");
    } );
  }


  onEnviar2(): void {
    console.log('FORM GROUP: ', this.productForm.value);
    this.productSubspost = this.productservice.addProduct({
      ...this.productForm.value
  }).subscribe(
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
    this.productSubsdel =this.productservice.deleteProduct(id).subscribe(res => {
      console.log('Response',res)
      this.loadProducts();
    },
      err=>{
        console.log('Error')
      }
    );
  }

  onedit(product):void{

    this.idedit=product.id;
    this.productForm.patchValue({
      name: product.name,
      grade: product.grade,
      id: product.id,
      age: product.age,
      urlImage: product.urlImage
    })
  }

  onUpdateProduct(){

    this.productSubsput = this.productservice.updateProduct(this.idedit,
      {...this.productForm.value,
        ownerId: this.authService.getUserId()
      }).subscribe( res=>{
      console.log('Response',res)
      this.loadProducts();
    },
      err=>{
        console.log('Error')
    });
  }
  onReport(product): void {
    this.store.dispatch(AddProduct({product: product}));
  }

}
