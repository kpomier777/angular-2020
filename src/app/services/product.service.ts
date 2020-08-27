import { Injectable } from '@angular/core';

@Injectable()

export class ProductService {

constructor() { }

public getProduct(): any []{
  return [{description: "Yo soy un producto",
  imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  ownerId: 1,
  price: 12,
  titulo: "salteña"
},
{description: "Yo soy un producto",
  imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  ownerId: 1,
  price: 12,
  titulo: "salteña"
},
{description: "Yo soy un producto",
  imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  ownerId: 1,
  price: 12,
  titulo: "salteña"
},
{description: "Yo soy un producto",
  imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  ownerId: 1,
  price: 12,
  titulo: "salteña"
}];
}
}

