// Model
export class Pizza {
  name: string;
  price: number;
}
export class OrderItem {
  amount: number;
  pizza: Pizza;
}
export class Order {
  orderItems: OrderItem[];
  email: string;
  // extend Order Object (Getter)
  get orderTotal(): number {
    let total = 0;
    this.orderItems.forEach(item => {
      total += item.amount * item.pizza.price;
    });
    return total;
  }

}
