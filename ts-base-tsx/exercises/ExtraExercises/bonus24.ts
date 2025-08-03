// your task:
// 1. Create an interface named 'User' with properties:
//    - name: string
//    - age: number
//    - active: boolean
// 2. Create a function named 'filterActiveAdults' that:
//    - accepts array of User objects
//    - filters only active users (active: true)
//    - filters only users above 18 years old (age > 18)
//    - returns array of names (string[])
// 3. Test your function with provided data

// to test your solution in terminal you can run following command:
// npm run bonus24

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

interface User {
  name: string;
  age: number;
  active: boolean;
}

function filterActiveAdults(userArray: User[]): string[] {
  return userArray
    .filter(user => user.active === true && user.age > 18)
    .map(user => user.name);
}
// Place your interface and function here

// Test data:
const users = [
  { name: "Jan", age: 25, active: true },
  { name: "Anna", age: 17, active: true },
  { name: "Marek", age: 40, active: false },
  { name: "Ola", age: 22, active: true },
  { name: "Ela", age: 18, active: true },
];

console.log(filterActiveAdults(users));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// ["Jan", "Ola"]

export {};
