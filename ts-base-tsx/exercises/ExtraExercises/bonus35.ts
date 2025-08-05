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
  itemList: OrderItem[];
  BOOK_DISCOUNT = 0.9;
  ELECTRONICS_DISCOUNT = 0.85;
  constructor() {
    this.itemList = [];
  }
  public addItem(item: OrderItem) {
    this.itemList.push(item);
  }
  private calculateItemPrice(item: OrderItem): number {
    let itemPrice: number;
    if (item.category === Category.Book) {
      itemPrice = item.price * item.quantity * this.BOOK_DISCOUNT;
    } else if (item.category === Category.Electronics && item.price > 2000) {
      itemPrice = item.price * item.quantity * this.ELECTRONICS_DISCOUNT;
    } else {
      itemPrice = item.price * item.quantity;
    }
    return itemPrice;
  }

  public calculateTotal(): number {
    let total = 0;
    for (let item of this.itemList) {
      total += this.calculateItemPrice(item);
    }
    return total;
  }
  public summary() {
    let report = "";
    for (let item of this.itemList) {
      report += `${item.name} x ${item.quantity} = ${this.calculateItemPrice(item)} zł \n`;
    }
    return report + `Final total: ${this.calculateTotal()} zł`;
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
