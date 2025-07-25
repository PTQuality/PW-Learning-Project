// Your task:
// 1. Create a function named `splitIntoWords`.
// 2. The function should accept one parameter — a string (a sentence).
// 3. It should return a new array where each word from the sentence is a separate element.
// 4. Use `console.log()` to print the result.

// To test your solution in terminal, run:
// npm run l01e13

//// TODO:
// here place your solution:

//// DO NOT MODIFY CODE BELOW!
// Example data for testing:
const sentence = "The quick brown fox jumps over the lazy dog.";

function splitIntoWords(string) {
  return string.split(" ").filter(word => word.length > 0);
}

console.log(splitIntoWords(sentence));
// Expected: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

//// TIPS – use if you get stuck:
/*
// Tip 1 – Use .split(" ") to separate words by space
// Tip 2 – The result of .split() is a new array
*/
