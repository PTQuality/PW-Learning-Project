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
// 3. Test your classes with the provided test data
// 4. Make sure all methods work correctly and display appropriate information

// Expected behavior:
// - After each addProduct/removeProduct operation, display total products count and total value
// - calculateTotalPrice() should return sum of all product prices
// - countProductsInCategory() should return number of products in specified category
// - removeProduct() should remove first product found with given name
// - displayPurchaseReport() should show formatted list of all products in cart

// To test your solution in terminal, run:
// npm run [appropriate-script-name]

// Place your solution here:
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

class Cart {
  products = [];
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
        `WARNING!!  Tried to remove "${productName}", but coudn't find it.`
      );
    }
  }
  calculateTotalPrice() {
    let sum = 0;
    for (let i = 0; i < this.products.length; i++) {
      sum += this.products[i].price;
    }
    return sum;
  }
  countProductsInCategory(category) {
    let countOfproductsInCategory = 0;
    for (let i = 0; i < this.products.length; i++) {
      if (category === this.products[i].category) {
        countOfproductsInCategory += 1;
      }
    }
    return countOfproductsInCategory;
  }
  //logowanie produktow po kazdej operacji
  displayPurchaseReport() {
    console.log("=================================");
    console.log("Currently in the cart:");
    for (let i = 0; i < this.products.length; i++) {
      console.log(`- ${this.products[i].name}`);
    }
  }
}

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
cart.removeProduct("Mouse1");
cart.displayPurchaseReport();

const arr = [{ name: "test" }, { name: "test2" }];
console.log(arr.findIndex(name => name.name === "test2"));
