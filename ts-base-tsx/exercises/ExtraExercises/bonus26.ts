// your task:
// 1. Create an enum named 'Category' with values:
//    - Book
//    - Clothing
//    - Electronics
// 2. Create an interface named 'Product' with properties:
//    - name: string
//    - price: number
//    - category: Category
// 3. Create a function named 'filterProductsByCategory' that:
//    - accepts array of Product objects and a Category
//    - returns array of product names (string[]) that match the category
//    - returns empty array if no products match or input is empty
// 4. Test your function with provided data

// to test your solution in terminal you can run following command:
// npm run bonus26

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your enum, interface and function here

enum Category {
  Book,
  Clothing,
  Electronics,
}

interface Product {
  name: string;
  price: number;
  category: Category;
}

function filterProductsByCategory(
  products: Product[],
  category: Category
): string[] {
  return products
    .filter(product => product.category === category)
    .map(product => product.name);
}

// Test data:
const products = [
  { name: "Laptop", price: 2000, category: Category.Electronics },
  { name: "T-shirt", price: 80, category: Category.Clothing },
  { name: "Book A", price: 40, category: Category.Book },
  { name: "Book B", price: 55, category: Category.Book },
  { name: "Phone", price: 1500, category: Category.Electronics },
];

console.log("Books:", filterProductsByCategory(products, Category.Book));
console.log("Clothing:", filterProductsByCategory(products, Category.Clothing));
console.log(
  "Electronics:",
  filterProductsByCategory(products, Category.Electronics)
);
console.log("Empty array:", filterProductsByCategory([], Category.Book));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// Books: ["Book A", "Book B"]
// Clothing: ["T-shirt"]
// Electronics: ["Laptop", "Phone"]
// Empty array: []

export {};
