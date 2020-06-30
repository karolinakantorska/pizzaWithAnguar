import { Component } from '@angular/core';

@Component({
  // to add whole programm to index.html
  selector: 'app-root',
  // to add whole programm to index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPizza';
  pizzas: Pizza[] = [
    { name: 'Margaritha', price: 15 },
    { name: 'Napoli', price: 18 },
    { name: 'Hawaii', price: 20 },
  ];
  // data Model
  order: Order = {
    email: 'karolina.kantorska@gmail.com',
    orderItems: [
      { amount: 0, pizza: { name: 'Margaritha', price: 15 } },
      { amount: 0, pizza: { name: 'Napoli', price: 18 } },
      { amount: 0, pizza: { name: 'Hawaii', price: 20 } },
    ]
  }
}

