// your task:
// 1. Create an interface named 'User' with properties:
//    - name: string
//    - email: string
//    - age?: number (optional)
// 2. Create a function named 'formatUser' that:
//    - accepts one parameter 'user' of type 'User'
//    - returns text: "User {name} with email {email} is {age} years old" if age is provided
//    - returns text: "User {name} with email {email}" if age is not provided
//    - function should return type 'string'
// 3. Test your function with provided users

// to test your solution in terminal you can run following command:
// npm run bonus23

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your interface and function here

interface User {
  name: string;
  email: string;
  age?: number;
}

function formatUser(user: User): string {
  if (user.age !== undefined)
    return `User ${user.name} with email ${user.email} is ${user.age} years old`;
  else {
    return `User ${user.name} with email ${user.email}`;
  }
}

// Test calls - just console.log the results:
console.log(formatUser({ name: "Jan", email: "jan@test.com", age: 30 }));
console.log(formatUser({ name: "Anna", email: "anna@domain.com" }));
console.log(formatUser({ name: "Marek", email: "m@x.com", age: 45 }));
console.log(formatUser({ name: "Ola", email: "ola@mail.pl" }));
console.log(formatUser({ name: "Ela", email: "ela@wp.pl", age: 22 }));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// User Jan with email jan@test.com is 30 years old
// User Anna with email anna@domain.com
// User Marek with email m@x.com is 45 years old
// User Ola with email ola@mail.pl
// User Ela with email ela@wp.pl is 22 years old

export {};
