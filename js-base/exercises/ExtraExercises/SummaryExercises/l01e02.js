// Your task:
// 1. Create a function named `checkAdultStatus`.
// 2. The function should accept one argument — a user's age.
// 3. It should:
//    - Print "Jesteś pełnoletni" if age is 18 or above,
//    - Print "Nie jesteś pełnoletni" if age is below 18,
//    - Return true if user is adult (18+), false otherwise.

// To test your solution in terminal, run:
// npm run l01e02

//// TODO:
// here place your solution:

function checkAdultStatus(userAge) {
  return userAge >= 18
    ? console.log("Jesteś pełnoletni", true)
    : console.log("Jesteś niepełnoletni", false);
}

checkAdultStatus(0);
checkAdultStatus(18);
checkAdultStatus(57);

//// DO NOT MODIFY CODE BELOW!
// Here you will find expected output for verification:

// Expected output for test cases:
// checkAdultStatus(16) → prints "Nie jesteś pełnoletni", returns false
// checkAdultStatus(20) → prints "Jesteś pełnoletni", returns true

//// TIPS – use if you get stuck:
/*
// Tip 1 – How to declare a function:
// function checkAdultStatus(age) { }

// Tip 2 – How to check for 18+?
// Use a condition like: if (age >= 18) { ... }
*/
