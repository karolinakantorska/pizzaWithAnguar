import { Component } from '@angular/core';

import { Order, OrderItem } from './pizza.model';
import { BakeService } from './service/bake.service';

@Component({
  // to add whole programm to index.html
  selector: 'app-root',
  // to add whole programm to index.html
  templateUrl: 'order.component.html',
})
export class OrderComponent {
  order = new Order();
  constructor(private bakeService: BakeService) {
    this.order.email = 'my@email.com';
    this.order.orderItems = [];
  }
  addOrderItem() {
    this.order.orderItems.push({ amount: 0, pizza: { name: '', price: 0 } });
  }
  submitOrder() {
    alert(`Pizzas ordered by ${this.order.email} !`);
    alert(`It will be ready in : ${this.bakeService.calculateBakeTimeForOrder(this.order)} minutes`);
  }
  orderAmountChanged(newOrderAmount: number) {
    console.log(`new order amount ${newOrderAmount}`);
  }
}
