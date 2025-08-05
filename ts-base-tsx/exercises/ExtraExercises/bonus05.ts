// your task:
// 1. Create a function named 'checkValueType' that:
//    - accepts one parameter 'value' of type 'unknown'
//    - returns nothing (void)
//    - prints to console: "The value {value} is of type {type}"
//    - where {value} is the actual value and {type} is the JavaScript type
// 2. Test your function with following values:
//    - number: 42
//    - string: "hello"
//    - boolean: true
//    - object: { name: "test" }
//    - array: [1, 2, 3]
//    - null
//    - undefined
// 3. Display all results on console

// to test your solution in terminal you can run following command:
// npm run bonus05

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

function checkValueType(value: unknown): void {
  let type = typeof value;
  console.log(`The value ${value} is of type ${type}`);
}

checkValueType(42);
checkValueType("hello");
checkValueType(true);
checkValueType({ name: "test" });
checkValueType([1, 2, 3]);
checkValueType(null);
checkValueType(undefined);

// Place your function here

// Test calls here

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see:
// The value 42 is of type number
// The value hello is of type string
// The value true is of type boolean
// The value [object Object] is of type object
// The value 1,2,3 is of type object
// The value null is of type object
// The value undefined is of type undefined

// Ignore this line - used to be able to redeclare variables in this project
export {};
