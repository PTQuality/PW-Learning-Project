// your task:
// Create a function that accepts another function as an argument and executes it on provided data.
//
// Requirements:
// 1. Create function applyFunction that:
//    - accepts two arguments:
//      * data: number[] – array of numbers
//      * fn: (value: number) => number – function that transforms numbers
//    - returns new array with results of applying fn to each element of data
//
// 2. Prepare three different functions:
//    - double – doubles the value
//    - square – raises number to power of 2
//    - negate – changes the sign of number
//
// 3. Test applyFunction with each of the above functions and print results to console
//
// Goal: Practice passing functions as arguments and working with function typing in TypeScript
//
// Test data: const numbers = [1, 2, 3, 4];
//
// Expected output:
// [2, 4, 6, 8]      // for double
// [1, 4, 9, 16]     // for square
// [-1, -2, -3, -4]  // for negate
//
// To test your solution in terminal, run:
// npm run bonus30

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// your code here 👇

function applyFunction(
  data: number[],
  fn: (value: number) => number
): number[] {
  return data.map(value => fn(value));
}

function double(value: number): number {
  return value * 2;
}

function square(value: number): number {
  return value * value;
}

function negate(value: number): number {
  return -value;
}

// ------------------------TEST CASES - DON'T TOUCH---------------------------

const numbers = [1, 2, 3, 4];

console.log(applyFunction(numbers, double)); // [2, 4, 6, 8]
console.log(applyFunction(numbers, square)); // [1, 4, 9, 16]
console.log(applyFunction(numbers, negate)); // [-1, -2, -3, -4]

export {};
