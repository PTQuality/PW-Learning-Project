// Your task:
// 1. Create a function named `checkEvenNumber`.
// 2. The function should accept a single number as an argument.
// 3. It should:
//    - Print "The number {value} is even" if the number is even,
//    - Print "The number {value} is odd" if the number is odd.

// To test your solution in terminal, run:
// npm run l01e03

//// TODO:
// here place your solution:

function checkEvenNumber(number) {
  number % 2 === 0
    ? console.log(`The number ${number} is even`)
    : console.log(`The number ${number} is odd`);
}

checkEvenNumber(2);
checkEvenNumber(3);

//// DO NOT MODIFY CODE BELOW!
// Here you will find expected output for verification:

// Expected output for test cases:
// checkEvenNumber(1) → "The number 1 is odd"
// checkEvenNumber(8) → "The number 8 is even"

//// TIPS – use if you get stuck:
/*
// Tip 1 – How to check if number is even?
// Use modulo operator: if (num % 2 === 0)
*/
