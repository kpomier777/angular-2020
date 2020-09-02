import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  productForm: FormGroup;

  // nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder, private productservice: ProductService) {
  }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      description: ['Descrition', [ Validators.required, Validators.minLength(3)]],
      imageUrl: '',
      ownerId: '',
      price: '',
      title: ''
    });

  }

  /*onEnviar() {
    console.log('VALOR: ', this.nameConatrol.value);
  }*/

  onEnviar2(): void {
    console.log('FORM GROUP: ', this.productForm.value);
    this.productservice.addProduct(this.productForm.value).subscribe(
      res => {
      console.log('RESP: ', res);
    },
    err => {
      console.log('ERROR DE SERVIDOR');
    }
  );
  }
}
