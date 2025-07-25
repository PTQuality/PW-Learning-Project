// Your task:
// 1. Create a class named `Author`.
//    - It should have two properties: `firstName` and `lastName`.
// 2. Create a class named `Book`.
//    - It should have two properties: `title` (string) and `author` (object of type Author).
// 3. Add a method `getDetails()` to the `Book` class that returns:
//    "Książka '[title]' napisana przez [firstName] [lastName]."
// 4. Use `console.log()` to print the result of `getDetails()`.

// To test your solution in terminal, run:
// npm run l01e09

//// TODO:
// here place your solution:

class Author {
  constructor(firstName, lastName) {
    if (!firstName || !lastName)
      throw new Error("Both firstName and lastName are required.");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
class Book {
  constructor(author, title) {
    if (!author || !title) throw new Error("Title and author are required");

    this.title = title;
    this.author = author;
  }

  getDetails() {
    return `Książka '${this.title}' napisana przez ${this.author.firstName} ${this.author.lastName}`;
  }
}
let author = new Author("J.K", "Rowling");
let book = new Book(author, "Harry Potter");
console.log(book.getDetails());

// Example instance data to use:
// Title: "Harry Potter"
// Author: J.K. Rowling

//// DO NOT MODIFY CODE BELOW!
// Expected output:
// Książka 'Harry Potter' napisana przez J.K. Rowling.

//// TIPS – use if you get stuck:
/*
// Tip 1 – Create two separate classes
// Tip 2 – In Book class, pass the Author object to the constructor
// Tip 3 – Use template strings in getDetails() method
*/
