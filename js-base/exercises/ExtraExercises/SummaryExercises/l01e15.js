// Your task:
// 1. Create a class named `Student`.
//    - It should have two properties: `name` (string) and `grade` (number).
// 2. Create a class named `SchoolClass`.
//    - It should have two properties: `name` (string) and `students` (array).
//    - Add a method `addStudent(student)` to add a student to the class.
//    - Add a method `listStudents()` that returns students as a string in the format: "Name: Grade, Name: Grade"
// 3. Create three instances of `SchoolClass`: "Klasa A", "Klasa B", "Klasa C".
// 4. Add three students to each class using `addStudent()`.
// 5. Print the class name and its students using `console.log()` in the format:
//    Klasa A: Jan: 5, Maria: 4, Adam: 3

// To test your solution in terminal, run:
// npm run l01e15

//// TODO:
// here place your solution:

class Student {
  constructor(name, grade) {
    if (!name || !grade) throw new Error("Student missing name and/or grade");
    this.name = name;
    this.grade = grade;
  }
}

class SchoolClass {
  constructor(className) {
    if (!className) throw new Error("Class missing name");
    this.className = className;
    this.students = [];
  }
  addStudent(student) {
    this.students.push(student);
  }
  listStudents() {
    return this.students
      .map(student => `${student.name}: ${student.grade}`)
      .join(", ");
  }
}

const listOfStudents = [
  new Student("Jan", 5),
  new Student("Maria", 4),
  new Student("Adam", 3),
  new Student("Ola", 4),
  new Student("Ewa", 5),
  new Student("Piotr", 3),
  new Student("Tomasz", 5),
  new Student("Anna", 2),
  new Student("Zofia", 4),
];

let classA = new SchoolClass("Klasa A");
let classB = new SchoolClass("Klasa B");
let classC = new SchoolClass("Klasa C");

classA.addStudent(listOfStudents[0]);
classA.addStudent(listOfStudents[1]);
classA.addStudent(listOfStudents[2]);

classB.addStudent(listOfStudents[3]);
classB.addStudent(listOfStudents[4]);
classB.addStudent(listOfStudents[5]);

classC.addStudent(listOfStudents[6]);
classC.addStudent(listOfStudents[7]);
classC.addStudent(listOfStudents[8]);

console.log(`${classA.className}: ${classA.listStudents()}`);
console.log(`${classB.className}: ${classB.listStudents()}`);
console.log(`${classC.className}: ${classC.listStudents()}`);

//// DO NOT MODIFY CODE BELOW! (Example expected output):
// Klasa A: Jan: 5, Maria: 4, Adam: 3
// Klasa B: Ola: 4, Ewa: 5, Piotr: 3
// Klasa C: Tomasz: 5, Anna: 2, Zofia: 4

//// TIPS – use if you get stuck:
/*
// Tip 1 – Use .push() to add students to the array.
// Tip 2 – Use .map() and .join() in listStudents() for formatting.
*/
