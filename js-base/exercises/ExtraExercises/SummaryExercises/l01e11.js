// Your task:
// 1. Create a function named `reverseArray`.
// 2. The function should accept one parameter — an array.
// 3. It should return a new array with the elements in reversed order.
//    (The original array should remain unchanged.)
// 4. Use `console.log()` to print the result.

// To test your solution in terminal, run:
// npm run l01e11

//// TODO:
// here place your solution:

//// DO NOT MODIFY CODE BELOW!
// Example data for testing:
const array = [1, 2, 3, 4, 5];

function reverseArray(array) {
  return array.slice().reverse();
}

console.log(reverseArray(array)); // Expected: [5, 4, 3, 2, 1]

//// TIPS – use if you get stuck:
/*
// Tip 1 – Use .slice() to create a shallow copy
// Tip 2 – Use .reverse() on the copied array
*/
