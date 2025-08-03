// your task:
// 1. Create a function named 'checkAccess' that:
//    - accepts one parameter 'user' of type object with properties:
//      - age: number
//      - hasTicket: boolean
//    - checks if user's age is 18 or older AND user has a ticket
//    - returns "Access granted" if both conditions are met
//    - returns "Access denied" if any condition is not met
//    - function should return type 'string'
// 2. Test your function with following values and display results:

// to test your solution in terminal you can run following command:
// npm run bonus11

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your function here
interface User {
  age: number;
  hasTicket: boolean;
}

function checkAccess(user: User): string {
  return user.age >= 18 && user.hasTicket ? "Access granted" : "Access denied";
}

// Test calls - just console.log the results:
console.log(checkAccess({ age: 20, hasTicket: true }));
console.log(checkAccess({ age: 16, hasTicket: true }));
console.log(checkAccess({ age: 32, hasTicket: false }));
console.log(checkAccess({ age: 18, hasTicket: true }));
console.log(checkAccess({ age: 17, hasTicket: false }));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// Access granted
// Access denied
// Access denied
// Access granted
// Access denied

export {};
