// Your task:
// 1. Create a function named `convertToUpperCase`.
// 2. The function should accept one parameter — a string.
// 3. It should return a new string where all characters are in uppercase.
// 4. Use `console.log()` to print the result.

// To test your solution in terminal, run:
// npm run l01e14

//// TODO:
// here place your solution:

//// DO NOT MODIFY CODE BELOW!
// Example data for testing:
const sentence = "The quick brown fox jumps over the lazy dog.";

function convertToUpperCase(string) {
  return string.toUpperCase();
}
console.log(convertToUpperCase(sentence));

// Expected: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'

//// TIPS – use if you get stuck:
/*
// Tip 1 – Strings have a method called .toUpperCase()
// Tip 2 – This method returns a new string (doesn’t modify the original)
*/
