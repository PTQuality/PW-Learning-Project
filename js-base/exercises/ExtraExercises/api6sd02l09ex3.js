// Your task:
// 1. You have an array: values = [5].
// 2. Use array destructuring to assign:
//    - the first value to variable `x`,
//    - the second value to variable `y`, with a default of 10 if it doesn't exist.
// 3. Print both variables (x and y) to the console.

// to test your solution in terminal You can run following command:
// npm run api6sd02l09ex3

//// TODO:
// here place your solution:

const values = [5];
const [x, y = 10] = values;

console.log(x);
console.log(y);

//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise and verification!

// Expected output:
// 5
// 10
