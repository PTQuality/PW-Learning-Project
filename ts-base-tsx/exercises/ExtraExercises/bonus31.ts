// your task:
// Create a function that generates another function with access to passed data.
//
// Requirements:
// 1. Create function createMultiplier that:
//    - accepts one parameter: factor: number
//    - returns new function that accepts value: number and returns result value * factor
//
// 2. Use this function to create:
//    - double = createMultiplier(2)
//    - triple = createMultiplier(3)
//
// 3. Test the functionality by passing different numbers to double and triple
//
// Goal: Understanding closures and generating functions with context
//
// Test data:
// const double = createMultiplier(2);
// const triple = createMultiplier(3);
// console.log(double(4));  // 👉 8
// console.log(triple(5));  // 👉 15
//
// Expected output:
// 8
// 15
//
// To test your solution in terminal, run:
// npm run bonus31

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// your code here 👇

function createMultiplier(factor: number): (value: number) => number {
  return (value: number) => factor * value;
}

// ------------------------TEST CASES - DON'T TOUCH---------------------------

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(4)); // 8
console.log(triple(5)); // 15
console.log(double(10)); // 20
console.log(triple(7)); // 21

export {};
