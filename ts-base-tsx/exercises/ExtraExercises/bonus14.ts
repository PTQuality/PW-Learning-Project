// your task:
// 1. Create a function named 'filterEvenNumbers' that:
//    - accepts one parameter 'numbers' of type 'number[]'
//    - filters only even numbers from the array
//    - returns a new array containing only even numbers
//    - returns empty array if no even numbers found
//    - function should return type 'number[]'
// 2. Test your function with following values and display results:

// to test your solution in terminal you can run following command:
// npm run bonus14

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your function here

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(number => number % 2 === 0);
}

// Test calls - just console.log the results:
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([1, 3, 5]));
console.log(filterEvenNumbers([2, 4, 6, 8]));
console.log(filterEvenNumbers([]));
console.log(filterEvenNumbers([-2, -1, 0, 1, 2]));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// [2, 4, 6]
// []
// [2, 4, 6, 8]
// []
// [-2, 0, 2]

export {};
