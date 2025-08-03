// your task:
// 1. Create a function named 'calculateAverage' that:
//    - accepts one parameter 'grades' of type 'number[]'
//    - calculates the arithmetic average of all grades
//    - rounds the result to 2 decimal places
//    - returns text in format: "Average grade: {value}"
//    - function should return type 'string'
// 2. Test your function with following values and display results:

// to test your solution in terminal you can run following command:
// npm run bonus12

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your function here

function calculateAverage(grades: number[]): string {
  const sum = grades.reduce((sum, num) => sum + num, 0);
  const average = grades.length ? sum / grades.length : 0;
  return `Average grade: ${average.toFixed(2)}`;
}

// Test calls - just console.log the results:
console.log(calculateAverage([5, 4, 3]));
console.log(calculateAverage([2, 3, 5, 5]));
console.log(calculateAverage([6, 6, 6]));
console.log(calculateAverage([1, 2, 3, 4, 5]));
console.log(calculateAverage([]));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// Average grade: 4.00
// Average grade: 3.75
// Average grade: 6.00
// Average grade: 3.00
// Average grade: 0.00

export {};
