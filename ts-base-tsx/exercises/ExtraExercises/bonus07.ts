// your task:
// 1. Create a function named 'reverseText' that:
//    - accepts one parameter 'text' of type 'string'
//    - returns the reversed version of that text
//    - function should return type 'string'
// 2. Test your function with following values:
//    - "abc" (should return "cba")
//    - "hello" (should return "olleh")
//    - "TypeScript" (should return "tpircSepyT")
//    - "12345" (should return "54321")
//    - "" (empty string, should return "")
// 3. Display all results on console in format: "reverseText('{input}') = '{result}'"

// to test your solution in terminal you can run following command:
// npm run bonus07

//// TODO:

function reverseText(text: string): string {
  return text.split("").reverse().join("");
}

console.log("reverseText:", reverseText("abc"));
console.log("reverseText:", reverseText("hello"));
console.log("reverseText:", reverseText("TypeScript"));
console.log("reverseText:", reverseText("12345"));
console.log("reverseText:", reverseText(""));
