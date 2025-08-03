// your task:
// 1. Create an interface representing a basic person:
// - First name: string
// - Last name: string
// - Age: number
//
// 2. Create a class that uses this interface.
// - Store the provided data via constructor
// - Add a method that returns the full name and age in the format:
// "First Last (age years old)"
//
// 3. Create another interface that extends the previous one and adds one more property:
// - Job position: string
//
// 4. Create a new class that:
// - Inherits from the first class
// - Accepts the extended interface via constructor
// - Adds a method that returns info in the format:
// "First Last - Position (age years old)"
//
// 5. Use the data below to test your code:
// (write test cases on your own, based on this format)
// - First: Jan, Last: Kowalski, Age: 35, Position: Developer
// - First: Ola, Last: Nowak, Age: 28, Position: Designer
// - First: Marek, Last: Zieliński, Age: 45, Position: Manager
//
// To test your solution in terminal, run:
// npm run bonus29

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// your code here 👇

interface PersonData {
  firstName: string;
  lastName: string;
  age: number;
}

class Person {
  protected readonly firstName: string;
  protected readonly lastName: string;
  protected readonly age: number;

  constructor(personData: PersonData) {
    this.firstName = personData.firstName;
    this.lastName = personData.lastName;
    this.age = personData.age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName} (${this.age}) lat`;
  }
}

interface EmployeeData extends PersonData {
  position: string;
}

class Employee extends Person {
  private readonly position: string;

  constructor(employeeData: EmployeeData) {
    const { position, ...personData } = employeeData;
    super(personData);
    this.position = position;
  }
  getEmployeeInfo(): string {
    return `${this.firstName} ${this.lastName} - ${this.position} (${this.age}) lat`;
  }
}

// ------------------------TEST CASES - DON'T TOUCH---------------------------

const emp1 = new Employee({
  firstName: "Jan",
  lastName: "Kowalski",
  age: 35,
  position: "Developer",
});

const emp2 = new Employee({
  firstName: "Ola",
  lastName: "Nowak",
  age: 28,
  position: "Designer",
});

const emp3 = new Employee({
  firstName: "Marek",
  lastName: "Zieliński",
  age: 45,
  position: "Manager",
});

console.log(emp1.getFullName()); // "Jan Kowalski (35 lat)"
console.log(emp1.getEmployeeInfo()); // "Jan Kowalski - Developer (35 lat)"
console.log(emp2.getEmployeeInfo()); // "Ola Nowak - Designer (28 lat)"
console.log(emp3.getEmployeeInfo()); // "Marek Zieliński - Manager (45 lat)"

export {};
