// your task:
// 1. Create a function named 'validatePassword' that:
//    - accepts one parameter 'password' of type 'string'
//    - checks if password has minimum 8 characters
//    - returns "Valid password" if password is 8+ characters
//    - returns "Password too short" if password is less than 8 characters
//    - function should return type 'string'
// 2. Test your function with following values:
//    - "qwerty" (should return "Password too short")
//    - "qwerty1234" (should return "Valid password")
//    - "12345678" (should return "Valid password")
//    - "abc" (should return "Password too short")
//    - "" (empty string, should return "Password too short")
//    - "exactly8" (should return "Valid password")
// 3. Display all results on console in format: "validatePassword('{input}') = '{result}'"

// to test your solution in terminal you can run following command:
// npm run bonus08

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

function validatePassword(password: string): string {
  return password.length >= 8 ? "Valid password" : "Password too short";
}

function displayResult(password: string): void {
  console.log(`validatePassword('${password}') = '${validatePassword(password)}'`);
}

displayResult("qwerty");
displayResult("qwerty1234");
displayResult("12345678");
displayResult("abc");
displayResult("");
displayResult("exactly8");

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see:
// validatePassword('qwerty') = 'Password too short'
// validatePassword('qwerty1234') = 'Valid password'
// validatePassword('12345678') = 'Valid password'
// validatePassword('abc') = 'Password too short'
// validatePassword('') = 'Password too short'
// validatePassword('exactly8') = 'Valid password'

// Ignore this line - used to be able to redeclare variables in this project
export {};
