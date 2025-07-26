// Your task:
// 1. Implement convertCurrency() function that accepts currency name and amount as parameters and converts to PLN
// 2. Function should use predefined exchange rates (EUR: 4.50, USD: 3.80, GBP: 5.20)
// 3. Add error handling to check if given currency is supported
// 4. Display appropriate error message if currency is not supported
// 5. Test the function with provided test data

// to test your solution in terminal You can run following command:
// npm run l01e21

//// TODO:
// here place your solution:

function convertCurrency(name, amount) {
  const ExchangeRates = {
    EUR: 4.5,
    USD: 3.8,
    GBP: 5.2,
  };

  const exchangeRate = ExchangeRates[name];

  if (exchangeRate) {
    return Number(ExchangeRates[name]) * amount + " PLN";
  } else {
    return `Error: Currency ${name} is not supported. Supported currencies: EUR, USD, GBP`;
  }
}

//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Exchange rates to use:
// EUR to PLN: 4.50
// USD to PLN: 3.80
// GBP to PLN: 5.20

// Test data to use:
console.log(convertCurrency("EUR", 100)); // Should output: 450 PLN
console.log(convertCurrency("USD", 50)); // Should output: 190 PLN
console.log(convertCurrency("GBP", 20)); // Should output: 104 PLN
console.log(convertCurrency("JPY", 1000)); // Should output error message

// Expected output:
// After running this script on console You should display:
// 450 PLN
// 190 PLN
// 104 PLN
// Error: Currency JPY is not supported. Supported currencies: EUR, USD, GBP
