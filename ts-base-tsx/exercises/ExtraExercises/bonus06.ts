// your task:
// 1. Create a function named 'doubleNumber' that:
//    - accepts one parameter 'num' of type 'number'
//    - returns the doubled value of that number
//    - function should return type 'number'
// 2. Test your function with following values:
//    - 4 (should return 8)
//    - 7 (should return 14)
//    - 0 (should return 0)
//    - -3 (should return -6)
//    - 2.5 (should return 5)
// 3. Display all results on console in format: "doubleNumber({input}) = {result}"

// to test your solution in terminal you can run following command:
// npm run bonus06

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

function doubleNumber(num: number): number {
  return num * 2;
}

console.log(doubleNumber(4));
console.log(doubleNumber(7));
console.log(doubleNumber(0));
console.log(doubleNumber(-3));
console.log(doubleNumber(2.5));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see:
// doubleNumber(4) = 8
// doubleNumber(7) = 14
// doubleNumber(0) = 0
// doubleNumber(-3) = -6
// doubleNumber(2.5) = 5

// Ignore this line - used to be able to redeclare variables in this project
export {};
