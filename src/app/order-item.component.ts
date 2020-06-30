import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderItem} from './pizza.model';


@Component({
  selector: 'app-order-item',
  // View:
  templateUrl: 'order-item.component.html'
})

export class OrderItemComponent implements OnInit {
  @Input() orderItem: OrderItem;
  constructor() { }

  ngOnInit() { }

}

