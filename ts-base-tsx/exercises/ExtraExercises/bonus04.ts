// Task: Write parseUserAge function that:
// 1. Takes a string and tries to parse it to number
// 2. If parsing fails - returns -1
// 3. If age < 0 or > 150 - throws "Invalid age range" error
// 4. Use try-catch for error handling
// 5. Test with: "25", "abc", "-5", "200"
// npm run bonus04

function parseUserAge(stringToParse: string): number {
  try {
    const parsedString = Number(stringToParse);
    if (isNaN(parsedString)) {
      return -1;
    } else if (parsedString < 0 || parsedString > 150) {
      throw new Error();
    } else {
      return parsedString;
    }
  } catch (error) {
    console.log(`Invalid age range:${stringToParse} `);
    return -1;
  }
}

parseUserAge("25");
parseUserAge("abc");
parseUserAge("-5");
parseUserAge("200");
