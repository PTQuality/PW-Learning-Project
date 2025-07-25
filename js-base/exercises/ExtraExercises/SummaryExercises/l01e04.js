// Your task:
// 1. Create a function named `sumPositiveNumbers`.
// 2. The function should accept an array of numbers as an argument.
// 3. It should sum only the positive numbers from the array.
// 4. The function should return the sum.
// 5. After calling the function, print the result to the console.

// To test your solution in terminal, run:
// npm run l01e04

//// TODO:
// here place your solution:

function sumPositiveNumbers(arrayOfNumbers) {
  const onlyPositiveNumbers = arrayOfNumbers.filter(x => x >= 0);
  let sum = onlyPositiveNumbers.reduce((sum, num) => sum + num, 0);
  console.log(sum);
}
sumPositiveNumbers([3, -1, 7, 0]);
sumPositiveNumbers([3, -1, 7, 0, -5, 12]);

//// DO NOT MODIFY CODE BELOW!
// Here you will find expected output for verification:

// Expected output for test cases:
// sumPositiveNumbers([3, -1, 7, 0])        → 10
// sumPositiveNumbers([3, -1, 7, 0, -5, 12]) → 22

//// TIPS – use if you get stuck:

// Tip 1 – How to filter only positive numbers from an array?
// Use .filter(num => num > 0)

// Tip 2 – How to
