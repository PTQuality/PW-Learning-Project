// your task:
// 1. Create an interface named 'User' with properties:
//    - username: string
//    - email: string
//    - age: number
// 2. Create a function named 'validateUser' that:
//    - accepts one parameter 'user' of type 'User'
//    - validates username has at least 3 characters
//    - validates email contains @ and a dot after it
//    - validates age is 18 or older
//    - returns "Registration successful" if all validations pass
//    - returns appropriate error message if validation fails
//    - function should return type 'string'
// 3. Test your function with provided data

// to test your solution in terminal you can run following command:
// npm run bonus27

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

interface User {
  username: string;
  email: string;
  age: number;
}

// Place your interface and function here

function validateUser(user: User): string {
  const [local, domain] = user.email.split("@");
  if (user.username.length < 3) return "Invalid username";
  if (user.age < 18) return "Invalid age";
  if (!domain || !domain.includes(".")) return "Invalid email";
  return "Registration successful";
}

// Test calls - just console.log the results:
console.log(
  validateUser({ username: "jan", email: "jan@example.com", age: 25 })
);
console.log(validateUser({ username: "a", email: "a@b.com", age: 25 }));
console.log(validateUser({ username: "ola", email: "olamail.com", age: 25 }));
console.log(validateUser({ username: "zen", email: "zen@wp.pl", age: 16 }));
console.log(validateUser({ username: "test", email: "test@d.pl", age: 18 }));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// Registration successful
// Invalid username
// Invalid email
// Invalid age
// Registration successful

export {};
