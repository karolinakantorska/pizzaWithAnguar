import { Component, OnInit, Input, Output} from '@angular/core';

import { OrderItem} from './pizza.model';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-order-item',
  // View:
  templateUrl: 'order-item.component.html'
})

export class OrderItemComponent implements OnInit {
  @Input() orderItem: OrderItem;
  @Output() orderAmountChanged = new EventEmitter();
  constructor() { }

  ngOnInit() { }
  amountChanged() {
    this.orderAmountChanged.emit(this.orderItem.amount);
  }

}

