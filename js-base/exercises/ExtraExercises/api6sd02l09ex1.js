// Your task:
// 1. Create an object named "car" with the following properties: brand, model, and year.
// 2. Use object destructuring to extract the values of these properties.
// 3. Print each variable (brand, model, year) to the console in the order they appear.

// to test your solution in terminal You can run following command:
// npm run api6sd02l09ex1

//// TODO:
// here place your solution:

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

const { brand, model, year } = car;

console.log(brand);
console.log(model);
console.log(year);

//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise and verification!

// Expected output:
// Toyota
// Corolla
// 2020
