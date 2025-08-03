// your task:
// 1. Create a function named 'checkDayType' that:
//    - accepts one parameter 'day' of type 'string'
//    - checks if it's a workday (Monday to Friday)
//    - returns "Workday" for Monday-Friday
//    - returns "Weekend" for Saturday-Sunday
//    - returns "Invalid day" for any other input
//    - function should return type 'string'
// 2. Test your function with following values and display results:

// to test your solution in terminal you can run following command:
// npm run bonus13

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your function here

function checkDayType(day: string): string {
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return "Workday";
    case "Saturday":
    case "Sunday":
      return "Weekend";
    default:
      return "Invalid day";
  }
}

// Test calls - just console.log the results:
console.log(checkDayType("Monday"));
console.log(checkDayType("Saturday"));
console.log(checkDayType("Funday"));
console.log(checkDayType("Friday"));
console.log(checkDayType("Sunday"));
console.log(checkDayType("tuesday"));
console.log(checkDayType(""));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// Workday
// Weekend
// Invalid day
// Workday
// Weekend
// Invalid day
// Invalid day

export {};
