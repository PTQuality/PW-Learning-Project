// Your task:
// 1. Create a function named `displayCarInfo`.
// 2. The function should accept a single object argument with the properties: brand, model, and year.
// 3. Use object destructuring directly in the function parameters to extract these properties.
// 4. Print each of the values (brand, model, year) to the console in order.

// to test your solution in terminal You can run following command:
// npm run api6sd02l09ex6

//// TODO:
// here place your solution:

function displayCarInfo({ brand, model, year }) {
  console.log(brand);
  console.log(model);
  console.log(year);
}

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

displayCarInfo(car);
//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise and verification!

// Expected output:
// Toyota
// Corolla
// 2020
