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
}

