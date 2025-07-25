// Your task:
// 1. Create a class named `Book`.
// 2. The class should have a constructor that accepts:
//    - title (string),
//    - author (string),
//    - pageCount (number).
// 3. Add a method `describe()` that:
//    - Prints the book info in the format:
//      "Książka '[title]' autorstwa [author], zawiera [pageCount] stron."

// To test your solution in terminal, run:
// npm run l01e08

//// TODO:
// here place your solution:

//// DO NOT MODIFY CODE BELOW!
// Here you will find expected usage for verification:

class Book {
  constructor(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
  }

  describe() {
    console.log(
      `Książka '${this.title}' autorstwa ${this.author}, zawiera ${this.pageCount} stron.`
    );
  }
}

const book1 = new Book("Władca Pierścieni", "J.R.R. Tolkien", 1178);
book1.describe(); // → Książka 'Władca Pierścieni' autorstwa J.R.R. Tolkien, zawiera 1178 stron.

const book2 = new Book("Zbrodnia i kara", "Fiodor Dostojewski", 576);
book2.describe(); // → Książka 'Zbrodnia i kara' autorstwa Fiodor Dostojewski, zawiera 576 stron.

//// TIPS – use if you get stuck:
/*
// Tip 1 – How to create a class:
// class Book {
//   constructor(title, author, pageCount) {
//     ...
//   }
// }

// Tip 2 – How to define a method:
// describe() {
//   ...
// }
*/
