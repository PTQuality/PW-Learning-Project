// Your task:
// 1. Create a function `validatePESEL(pesel)` that takes a PESEL string.
// 2. Inside the function, check:
//    - That PESEL has exactly 11 characters.
//    - That all characters are digits.
// 3. Validate the checksum (last digit) using weights: [1, 3, 7, 9, 1, 3, 7, 9, 1, 3].
//    - Multiply each of the first 10 digits by the corresponding weight.
//    - Sum them up, mod 10, subtract from 10, and compare to the last digit.
// 4. [⭐Optional] Validate date of birth using YYMMDD (first 6 digits).
//    - Make sure the extracted values form a valid date.
// 5. Return an object:
//    {
//      status: true/false,
//      message: '...'
//    }
// 6. Test your function with both valid and invalid PESELs:
//    - Valid: "77110637172", "65091164587"
//    - Invalid: "4405140135", "abcde123456", "12345678901"

// To test your solution in terminal, run:
// npm run l01e19

//// TODO:

const peselWeights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

function validatePESEL(pesel) {
  const weightedDigits = [];
  if (/^\d{11}$/.test(pesel)) {
    const peselInArray = pesel.split("");
    const peselForWeightsCalculation = peselInArray.slice(0, 10);

    peselForWeightsCalculation.forEach((element, index) => {
      weightedDigits.push(Number(element) * peselWeights[index]);
    });
    let checksum =
      (10 - (weightedDigits.reduce((sum, num) => sum + num) % 10)) % 10;
    let arePeselDigitsValid =
      checksum === Number(pesel.charAt(pesel.length - 1));
    return arePeselDigitsValid
      ? { status: arePeselDigitsValid, message: "PESEL is valid." }
      : { status: arePeselDigitsValid, message: "PESEL is not correct." };
  } else {
    return {
      status: false,
      message: "PESEL must contain exactly 11 digits.",
    };
  }
}

function validateDate(pesel) {
  const year = Number(pesel.slice(0, 2));
  const month = Number(pesel.slice(2, 4));
  const day = Number(pesel.slice(4, 6));

  let whatCentury = 1900;
  switch (month) {
    case (1, 12):
      whatCentury = 1900;
      break;
    case (21, 32):
      whatCentury = 2000;
      break;
    case (41, 52):
      whatCentury = 2100;
      break;
    default:
      break;
  }

  const birthDate = new Date(whatCentury + year, month, day);
  if (
    birthDate.getFullYear() !== whatCentury + year ||
    birthDate.getMonth() !== month ||
    birthDate.getDate() !== day
  ) {
    return { status: false, message: "Invalid date in PESEL" };
  }
}

console.log(validatePESEL("77110637172"));
validatePESEL("65091164587");
validatePESEL("4405140135");
validatePESEL("abcde123456");
validatePESEL("12345678901");

console.log(validateDate("77110637172"));

// here place your solution:
