// Your task:
// 1. You have an object named `student` with a nested object `address`.
// 2. Use nested object destructuring to extract the value of the `street` property.
// 3. Print the value of `street` to the console.

// to test your solution in terminal You can run following command:
// npm run api6sd02l09ex5

//// TODO:
// here place your solution:

const student = {
  name: "Ewa",
  address: {
    city: "Warszawa",
    street: "Miodowa",
  },
};

const {
  address: { street },
} = student;

console.log(street);

//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise and verification!

// Expected output:
// Miodowa
