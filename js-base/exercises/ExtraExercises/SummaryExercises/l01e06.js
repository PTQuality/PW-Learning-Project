// Your task:
// 1. Create a function named `printStudentAverage`.
// 2. The function should accept a student object with the following properties:
//    - name: string
//    - surname: string
//    - grades: array of numbers
// 3. It should calculate the average of the grades.
// 4. It should print the full name and the average grade to the console in the format:
//    "Student: [name] [surname], Average: [average]"

// To test your solution in terminal, run:
// npm run l01e06

//// TODO:
// here place your solution:

const student1 = {
  name: "Jan",
  surname: "Kowalski",
  grades: [5, 4, 3, 5, 4],
};

const student2 = {
  name: "Anna",
  surname: "Nowak",
  grades: [2, 3, 3, 4, 1],
};

const student3 = {
  name: "Tomek",
  surname: "Zieliński",
  grades: [],
};

function printStudentAverage({ name, surname, grades }) {
  let averageOfGrades =
    grades.length > 0
      ? (grades.reduce((sum, num) => sum + num, 0) / grades.length).toFixed(2)
      : "No grades, No averages";

  console.log(`Student: ${name} ${surname}, Average: ${averageOfGrades}`);
}

printStudentAverage(student1);
printStudentAverage(student2);
printStudentAverage(student3);

// Call your function here with each student object:
// printStudentAverage(student1);
// printStudentAverage(student2);
// printStudentAverage(student3);

//// DO NOT MODIFY CODE BELOW!
// Here you will find expected output for verification:

// Expected output:
// Student: Jan Kowalski, Average: 4.20
// Student: Anna Nowak, Average: 2.60
// Student: Tomek Zieliński, Average: NaN

//// TIPS – use if you get stuck:
/*
// Tip 1 – Use .reduce() to sum the grades
// Tip 2 – Divide the sum by grades.length
// Tip 3 – Use toFixed(2) if you want to format the number to two decimal places
*/
