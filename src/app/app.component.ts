import { Component } from '@angular/core';

import { Order } from './pizza.model';
import { BakeService } from './service/bake.service';
@Component({
  // to add whole programm to index.html
  selector: 'app-root',
  // to add whole programm to index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPizza';
  order= new Order();
  constructor(private bakeService: BakeService) {
    this.order.email = 'my@email.com';
    this.order.orderItems = [
      { amount: 0, pizza: { name: 'Margarita', price: 15 } },
      { amount: 0, pizza: { name: 'Ham', price: 18 } },
      { amount: 0, pizza: { name: 'Hawai', price: 20 } },
    ];
  }
  submitOrder() {
    alert(`Pizzas ordered by ${this.order.email} !`);
    alert(`It will be ready in : ${this.bakeService.calculateBakeTimeForOrder(this.order)} minutes`);
  }
  orderAmountChanged(newOrderAmount: number) {
    console.log(`new order amount ${newOrderAmount}`);
  }
  /*
  pizzas: Pizza[] = [
    { name: 'Margaritha', price: 15 },
    { name: 'Napoli', price: 18 },
    { name: 'Hawaii', price: 20 },
  ];
  */
  // data Model
  /*
  order: Order = {
    email: 'karolina.kantorska@gmail.com',
    orderItems: [
      { amount: 0, pizza: { name: 'Margaritha', price: 15 } },
      { amount: 0, pizza: { name: 'Napoli', price: 18 } },
      { amount: 0, pizza: { name: 'Hawaii', price: 20 } },
    ]
  };
  */
}

