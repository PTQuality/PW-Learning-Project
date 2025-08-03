// your task:
// 1. Create a function named 'processNumbers' that:
//    - accepts two parameters:
//      - 'numbers' of type 'number[]'
//      - 'operation' of type function that takes number and returns number
//    - applies the operation function to each number in the array
//    - returns a new array with the results
//    - function should return type 'number[]'
// 2. Create three operation functions:
//    - 'addOne' - adds 1 to a number
//    - 'multiplyByTwo' - multiplies number by 2
//    - 'subtractTen' - subtracts 10 from a number
// 3. Test processNumbers with each operation function and display results

// to test your solution in terminal you can run following command:
// npm run bonus16

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your functions here

const numbers = [5, 10, 15];
function processNumbers(
  numbers: number[],
  operation: (n: number) => number
): number[] {
  const processedArray: number[] = [];
  for (let number of numbers) {
    processedArray.push(operation(number));
  }
  return processedArray;
}

function addOne(n: number): number {
  return n + 1;
}
function multiplyByTwo(n: number): number {
  return n * 2;
}

function subtractTen(n: number): number {
  return n - 10;
}

// Test calls - just console.log the results:
console.log(processNumbers(numbers, addOne));
console.log(processNumbers(numbers, multiplyByTwo));
console.log(processNumbers(numbers, subtractTen));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// [6, 11, 16]
// [10, 20, 30]
// [-5, 0, 5]

export {};
