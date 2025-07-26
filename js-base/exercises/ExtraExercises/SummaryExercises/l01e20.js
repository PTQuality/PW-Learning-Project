// Your task:
// 1. Create a `Product` class with properties: name, price, category
// 2. Create a `Cart` class that:
//    - Has an array to store products
//    - Has method `addProduct(product)` to add products to cart
//    - Has method `removeProduct(productName)` to remove product by name
//    - Has method `calculateTotalPrice()` that returns total price of all products
//    - Has method `countProductsInCategory(category)` that counts products in given category
//    - Logs total number of products and their value after each add/remove operation
//    - Has method `displayPurchaseReport()` that shows all products with their details
// 3. Test your classes with the provided test data below
// 4. Make sure removeProduct handles cases when product doesn't exist

// to test your solution in terminal You can run following command:
// npm run l01e20

//// TODO:
// here place your solution:

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

class Cart {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
    console.log(`${product.name} was added to the cart`);
    console.log(`Amount of products in cart: ${this.products.length}`);
    console.log(`Current value of products: ${this.calculateTotalPrice()}`);
    console.log("=================================");
    console.log("");
  }
  removeProduct(productName) {
    const index = this.products.findIndex(
      product => product.name === productName
    );
    if (index !== -1) {
      this.products.splice(index, 1);
      console.log(`${productName} was removed from the cart`);
      console.log(`Amount of products in cart: ${this.products.length}`);
      console.log(`Current value of products: ${this.calculateTotalPrice()}`);
      console.log("=================================");
      console.log("");
    } else {
      console.log(
        `WARNING!!  Tried to remove "${productName}", but couldn't find it.`
      );
    }
  }
  calculateTotalPrice() {
    let sum = 0;
    for (let product of this.products) {
      sum += product.price;
    }
    return sum;
  }
  countProductsInCategory(category) {
    let countOfproductsInCategory = 0;
    for (let product of this.products) {
      if (category === product.category) {
        countOfproductsInCategory += 1;
      }
    }
    return countOfproductsInCategory;
  }
  //logowanie produktow po kazdej operacji
  displayPurchaseReport() {
    console.log("=================================");
    console.log("Currently in the cart:");
    for (let product of this.products) {
      console.log(`- ${product.n}`);
    }
  }
}

//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Test data to use:
const cart = new Cart();
const product1 = new Product("Laptop", 3000, "Electronics");
const product2 = new Product("Mouse", 150, "Electronics");
const product3 = new Product("Book", 50, "Books");
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
console.log(cart.calculateTotalPrice()); // Should output: 3200
console.log(cart.countProductsInCategory("Electronics")); // Should output: 2
cart.removeProduct("Mouse");
cart.removeProduct("NonExistentProduct"); // Should handle gracefully
cart.displayPurchaseReport();
