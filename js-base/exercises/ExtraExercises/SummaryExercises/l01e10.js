// Your task:
// 1. Create a function named `findWordPosition`.
// 2. The function should accept two parameters:
//    - `text` – a string containing the full sentence.
//    - `word` – a string representing the word to find.
// 3. The function should return the index (number) of the first occurrence of `word` in `text`.
// 4. Use `console.log()` to print the result.

// To test your solution in terminal, run:
// npm run l01e10

//// TODO:
// here place your solution:

//// DO NOT MODIFY CODE BELOW!
// Example data for testing:
const text = "The quick brown fox jumps over the lazy dog.";
const word = "fox";

function findWordPosition(text, word) {
  if (text.includes(word)) {
    return text.indexOf(word);
  } else return "Word does not exist in string";
}

console.log(findWordPosition(text, word)); // Expected: 16

//// TIPS – use if you get stuck:
/*
// Tip 1 – You can use string methods like .indexOf()
// Tip 2 – If the word is not found, .indexOf() will return -1
*/
