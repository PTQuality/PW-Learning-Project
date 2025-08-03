// your task:
// 1. Create a function named 'compareNumbers' that:
//    - accepts two parameters 'a' and 'b' of type 'number'
//    - compares the two numbers
//    - returns "{a} is greater" if a > b
//    - returns "{b} is greater" if b > a
//    - returns "Both are equal" if a === b
//    - function should return type 'string'
// 2. Test your function with following values and display results:

// to test your solution in terminal you can run following command:
// npm run bonus09

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your function here

function compareNumbers(a: number, b: number): string {
  if (a > b) {
    return `${a} is greater`;
  } else if (a === b) {
    return "Both are equal";
  } else {
    return `${b} is greater`;
  }
}

// Test calls - just console.log the results:
console.log(compareNumbers(4, 5));
console.log(compareNumbers(7, 2));
console.log(compareNumbers(3, 3));
console.log(compareNumbers(0, -1));
console.log(compareNumbers(-5, -3));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// 5 is greater
// 7 is greater
// Both are equal
// 0 is greater
// -3 is greater

export {};
