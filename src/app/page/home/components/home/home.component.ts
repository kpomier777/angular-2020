import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  products = [
    {description: "Yo soy un productos",
    imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    ownerId: 1,
    price: 12,
    titulo: "salteña"
  },
  {description: "Yo soy un productos",
    imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    ownerId: 1,
    price: 12,
    titulo: "salteña"
  },
  {description: "Yo soy un productos",
    imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    ownerId: 1,
    price: 12,
    titulo: "salteña"
  },
  {description: "Yo soy un productos",
    imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    ownerId: 1,
    price: 12,
    titulo: "salteña"
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
