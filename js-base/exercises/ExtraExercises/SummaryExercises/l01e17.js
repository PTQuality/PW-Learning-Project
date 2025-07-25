// Your task:
// 1. Create a class named `ShoppingCart`.
//    - It should have a property `items` (array) to store cart products.
// 2. Each product added should be an object with: `name` (string), `price` (number), `quantity` (number).
// 3. Add a method `addItem(product)` that:
//    - Adds the product to the cart.
//    - If a product with the same `name` already exists – show a warning and don't add it again.
// 4. Add a method `removeItem(name)` that removes a product by its name.
// 5. Add a method `getTotalValue()` that calculates the total value of the cart (price * quantity per item).
// 6. Create an instance of the cart.
// 7. Perform operations:
//    - Add: { name: "Apple", price: 2, quantity: 5 }
//    - Add: { name: "Bread", price: 3, quantity: 2 }
//    - Remove: "Bread"
// 8. Use `console.log()` to print:
//    - All items in the cart
//    - Total value of the cart

// To test your solution in terminal, run:
// npm run l01e17

//// TODO:
// here place your solution:

class ShoppingCart {
  constructor() {
    this.items = [];
  }
  addItem(product) {
    if (!this.items.some(p => p.name === product.name))
      this.items.push(product);
    else {
      console.warn("Product already in card, action aborted");
    }
  }
  removeItem(productName) {
    this.items = this.items.filter(p => p.name !== productName);
  }
  getTotalValue() {
    return this.items.reduce(
      (sum, prod) => sum + prod.price * prod.quantity,
      0
    );
  }
}

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

const apple = new Product("Apple", 2, 5);
const bread = new Product("Bread", 3, 2);
let shoppingCart = new ShoppingCart();
shoppingCart.addItem(apple);
shoppingCart.addItem(bread);
shoppingCart.removeItem("Bread");

console.log(shoppingCart.getTotalValue());

//// Example expected output:
// [
//   { name: 'Apple', price: 2, quantity: 5 }
// ]
// Total value: 10

//// TIPS – use if you get stuck:
/// Tip 1 – Use .find() to check if product already exists
/// Tip 2 – Use .filter() to remove item by name
/// Tip 3 – Use .reduce() to sum total value (price * quantity)
