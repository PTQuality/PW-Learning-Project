// Your task:
// 1. Create a function named `sumGreaterThanTen`.
// 2. The function should accept an array of numbers as an argument.
// 3. It should sum only the numbers greater than 10.
// 4. The function should return the sum.
// 5. After calling the function, print the result to the console.

// To test your solution in terminal, run:
// npm run l01e05

//// TODO:
// here place your solution:

function sumGreaterThanTen(arrayOfNumbers) {
  let onlyNumbersHigherThanTen = arrayOfNumbers.reduce(
    (sum, num) => (num > 10 ? sum + num : sum),
    0
  );
  console.log(`Sum of array: ${onlyNumbersHigherThanTen}`);
}

sumGreaterThanTen([10, 11, -7]);
sumGreaterThanTen([10, 4, -7]);
sumGreaterThanTen([5, 12, 8, 21, 7, 14, -10]);

//// DO NOT MODIFY CODE BELOW!
// Here you will find expected output for verification:

// Expected output for test cases:
// sumGreaterThanTen([10, 11, -7])        → 11
// sumGreaterThanTen([10, 4, -7])         → 0
// sumGreaterThanTen([5, 12, 8, 21, 7, 14, -10]) → 47

//// TIPS – use if you get stuck:
/*
// Tip 1 – Use .filter() to select numbers greater than 10
// Tip 2 – Use .reduce() to sum them
*/
