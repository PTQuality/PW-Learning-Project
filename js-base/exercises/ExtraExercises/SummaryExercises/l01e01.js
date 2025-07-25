// Your task:
// 1. Create a function named `greetUser`.
// 2. The function should accept one argument — a user's name.
// 3. It should print a greeting to the console in the format: "Witaj, [name]!".

// To test your solution in terminal, run:
// npm run l01e01

//// TODO:
// here place your solution:

function greetUser(name) {
  console.log(`Witaj, ${name}`);
}

greetUser("Anna");
greetUser("Jan");

//// DO NOT MODIFY CODE BELOW!
// Here you will find expected output for verification:

// Expected output for test cases:
// greetUser("Anna") → "Witaj, Anna!"
// greetUser("Jan")  → "Witaj, Jan!"

//// TIPS – use if you get stuck:
/*
// Tip 1 – How to declare a function:
// function greetUser(name) { }

// Tip 2 – How to insert a variable into a string:
// Use template literals: `Witaj, ${name}!`
// Or use string concatenation: "Witaj, " + name + "!"
*/
