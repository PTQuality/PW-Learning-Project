// Your task:
// 1. Create a function named `validateEmail`.
// 2. The function should accept one argument — a string representing an email address.
// 3. It should:
//    - Check if the string contains an "@" character,
//    - Check if the string contains a "." after the "@" symbol,
//    - Print "Email is valid" and return true if valid,
//    - Otherwise, print "Email is invalid" and return false.

// To test your solution in terminal, run:
// npm run l01e07

//// TODO:
// here place your solution:

function validateEmail(emailAddress) {
  const [localPart, domain] = emailAddress.split("@");

  let isValid =
    !!localPart && !!domain && !!domain.includes(".") && domain[0] !== ".";
  if (isValid) {
    console.log("Email is valid");
    return true;
  } else {
    console.log("Email is not valid");
    return false;
  }
}

validateEmail("test@example.com");
validateEmail("user.name@domain.co");
validateEmail("email@sub.domain.com");
validateEmail("plainaddress");
validateEmail("@missinguser.com");
validateEmail("user@.nodomain");

function validateEmailWithRegex(emailAddress) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(emailAddress);
  console.log(isValid ? "Email is valid" : "Email is not valid");
  return isValid;
}

validateEmail("test@example.com");
validateEmail("user.name@domain.co");
validateEmail("email@sub.domain.com");
validateEmail("plainaddress");
validateEmail("@missinguser.com");
validateEmail("user@.nodomain");

//// DO NOT MODIFY CODE BELOW!
// Here you will find expected output for verification:

// Expected output for test cases:
// validateEmail("test@example.com")        → "Email is valid", returns true
// validateEmail("user.name@domain.co")     → "Email is valid", returns true
// validateEmail("email@sub.domain.com")    → "Email is valid", returns true
// validateEmail("plainaddress")            → "Email is invalid", returns false
// validateEmail("@missinguser.com")        → "Email is invalid", returns false
// validateEmail("user@.nodomain")          → "Email is invalid", returns false

//// TIPS – use if you get stuck:
/*
// Tip 1 – You can check if a string includes a substring with: str.includes("@")
// Tip 2 – You can check position of "@" and "." using indexOf()
// Tip 3 – Try a basic validation with string methods (no regex for now)
*/
