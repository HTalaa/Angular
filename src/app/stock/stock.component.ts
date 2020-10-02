import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
stock: Product[] = [{
  id:1,
  title: 'Ecran',
  description: 'Ecran plat de 24' ,
  price: 199.95,
  stockQuantity:10,
  creationdate: new Date(2020, 9, 11).toLocaleDateString()
},
  {
    id:2,
    stockQuantity: 1,
    title: 'produit1',
    description: 'description',
    price: 4,
    creationdate: new Date(2020, 9, 12).toLocaleDateString()
  },
  {
    id: 3,
    stockQuantity: 50,
    title: 'product 2',
    description: 'anything',
    price: 500,
    creationdate: new Date(2020, 9, 12).toLocaleDateString()
  }]
  constructor() { }

  ngOnInit(): void {
  }

  decr(value: Product) {
   value.stockQuantity--;
  }
}

export interface Product {
  id:number;
  title: string;
  description: string;
  price: number;
  stockQuantity: number;
  creationdate: string;


}
