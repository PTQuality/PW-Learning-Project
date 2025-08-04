// your task:
// Implement an order processing system with promotion handling
//
// Requirements:
// 1. Create enum Category with values: Book, Food, Electronics
//
// 2. Create interface OrderItem with fields:
//    - name: string
//    - price: number
//    - quantity: number
//    - category: Category
//
// 3. Create class Order with method addItem(item: OrderItem) and private items list
//
// 4. Add method calculateTotal() that:
//    - sums price * quantity for each product
//    - applies promotions:
//      * 10% discount on all Books
//      * 15% discount on Electronics above 2000 zł
//
// 5. Implement method summary() that returns text summary:
//    "Item x qty = total
//     Final total: X zł"
//
// Goal: Practice calculations with conditions, enum handling, and data formatting
//
// Test data:
// { name: "Book A", price: 100, quantity: 2, category: Category.Book }
// { name: "TV", price: 2500, quantity: 1, category: Category.Electronics }
// { name: "Bread", price: 5, quantity: 4, category: Category.Food }
//
// Expected output (after discounts):
// Book A x 2 = 180 zł
// TV x 1 = 2125 zł
// Bread x 4 = 20 zł
// Final total: 2325 zł
//
// To test your solution in terminal, run:
// npm run bonus35

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// your code here 👇

enum Category {
  Book = "Book",
  Food = "Food",
  Electronics = "Electronics",
}
interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  category: Category;
}

class Order {
  items: OrderItem[];
  constructor() {
    this.items = [];
  }
  addItem(item: OrderItem) {
    this.items.push(item);
  }

  calculateItemTotal(){
    
  }

  calculateTotal(): number {
    let total = 0;

    for (let item of this.items) {
      let itemTotal = item.price * item.quantity;

      if (item.category === Category.Book) {
        itemTotal = itemTotal * 0.9;
      } else if (item.category === Category.Electronics && itemTotal > 2000) {
        itemTotal = itemTotal * 0.85;
      }

      total += itemTotal;
    }

    return total;
  }
  summary(): string {
    let result = "";

    for (let item of this.items) {
      result += `${item.name} x ${item.quantity} = ${item.price * item.quantity} \n`;
    }
    return result + "Final total: " + this.calculateTotal() + " zł";
  }
}

// ------------------------TEST CASES - DON'T TOUCH---------------------------

const order = new Order();

order.addItem({
  name: "Book A",
  price: 100,
  quantity: 2,
  category: Category.Book,
});
order.addItem({
  name: "TV",
  price: 2500,
  quantity: 1,
  category: Category.Electronics,
});
order.addItem({
  name: "Bread",
  price: 5,
  quantity: 4,
  category: Category.Food,
});

console.log(order.summary());

export {};
