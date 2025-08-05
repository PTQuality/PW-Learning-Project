// your task:
// 1. Create an interface named 'Product' with properties:
//    - name: string
//    - price: number
// 2. Create a function named 'calculateGrossPrice' that:
//    - accepts one parameter 'product' of type 'Product'
//    - calculates gross price with 23% VAT (price * 1.23)
//    - rounds the result to 2 decimal places
//    - returns text: "Product {name} costs {grossPrice} PLN"
//    - function should return type 'string'
// 3. Test your function with provided products

// to test your solution in terminal you can run following command:
// npm run bonus19

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your interface and function here

interface Product {
  name: string;
  price: number;
}

function calculateGrossPrice(product: Product): string {
  let grossPrice: number = Math.round(product.price * 1.23 * 100) / 100;
  return `Product ${product.name} costs ${grossPrice} PLN`;
}

// Test calls - just console.log the results:
console.log(calculateGrossPrice({ name: "Book", price: 100 }));
console.log(calculateGrossPrice({ name: "Pen", price: 4.99 }));
console.log(calculateGrossPrice({ name: "Keyboard", price: 199.5 }));
console.log(calculateGrossPrice({ name: "Mouse", price: 55.25 }));
console.log(calculateGrossPrice({ name: "Bag", price: 0 }));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// Product Book costs 123.00 PLN
// Product Pen costs 6.14 PLN
// Product Keyboard costs 245.39 PLN
// Product Mouse costs 67.96 PLN
// Product Bag costs 0.00 PLN
export {};
