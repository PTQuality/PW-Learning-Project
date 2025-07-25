// Your task:
// 1. You have an array: fruits = ["jabłko", "banan", "pomarańcza", "gruszka"].
// 2. Use array destructuring with the rest operator to assign:
//    - the first fruit to variable `firstFruit`,
//    - the remaining fruits to variable `otherFruits`.
// 3. Print both variables (firstFruit and otherFruits) to the console.

// to test your solution in terminal You can run following command:
// npm run api6sd02l09ex4

//// TODO:
// here place your solution:

const fruits = ["jabłko", "banan", "pomarańcza", "gruszka"];
const [firstFruit, ...otherFruits] = fruits;
console.log(firstFruit);
console.log(otherFruits);

//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise and verification!

// Expected output:
// jabłko
// [ 'banan', 'pomarańcza', 'gruszka' ]
