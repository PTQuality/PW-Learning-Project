// your task:
// 1. Create a function named 'formatFullName' that:
//    - accepts two parameters 'firstName' and 'lastName' of type 'string'
//    - converts both names to proper case (first letter uppercase, rest lowercase)
//    - returns the full name in format: "FirstName LastName"
//    - function should return type 'string'
// 2. Test your function with following values and display results:

// to test your solution in terminal you can run following command:
// npm run bonus10

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your function here

function formatFullName(firstName: string, lastName: string): string {
  if (!firstName && !lastName) return "";
  function firstLetterToUpper(text: string): string {
    if (!text) return "";
    let loweredText = text.toLowerCase();
    let firstLetter = loweredText.charAt(0).toUpperCase();
    return firstLetter + loweredText.slice(1);
  }
  return firstLetterToUpper(firstName) + " " + firstLetterToUpper(lastName);
}

// Test calls - just console.log the results:
console.log(formatFullName("jan", "kowalski"));
console.log(formatFullName("ALICJA", "NOWAK"));
console.log(formatFullName("piotr", "ZIELIŃSKI"));
console.log(formatFullName("ANNA", "kowalczyk"));
console.log(formatFullName("", ""));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// Jan Kowalski
// Alicja Nowak
// Piotr Zieliński
// Anna Kowalczyk
// (empty line for empty strings)

export {};
