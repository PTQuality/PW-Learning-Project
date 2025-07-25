// Your task:
// 1. Create a function named `filterEvenNumbers`.
// 2. The function should accept one parameter — an array of numbers.
// 3. It should return a new array containing only the even numbers.
// 4. Use `console.log()` to print the result.

// To test your solution in terminal, run:
// npm run l01e12

//// TODO:
// here place your solution:

//// DO NOT MODIFY CODE BELOW!
// Example data for testing:
const numbers = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(arrayOfNumbers) {
  return arrayOfNumbers.filter(element => element % 2 === 0);
}

console.log(filterEvenNumbers(numbers)); // Expected: [2, 4, 6]
//// TIPS – use if you get stuck:
/*
// Tip 1 – Use .filter() to create a new array
// Tip 2 – Even numbers are divisible by 2: num % 2 === 0
*/
