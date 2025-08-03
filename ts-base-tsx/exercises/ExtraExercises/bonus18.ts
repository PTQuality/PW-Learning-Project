// your task:
// 1. Create a class named 'Person' that:
//    - has two properties: 'firstName' and 'lastName' (both type 'string')
//    - has a constructor that sets these values
//    - has a method 'introduce()' that returns string: "Hi, my name is {firstName} {lastName}."
//    - method should return type 'string'
// 2. Create instances of Person class and test the introduce method

// to test your solution in terminal you can run following command:
// npm run bonus18

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your class here

class Person {

  constructor( private firstName: string, private lastName: string) {

  }

  introduce(): string {
    return `Hi, my name is ${this.firstName} ${this.lastName}.`;
  }
}

// Test calls - create instances and console.log their introduce() method:
const person1 = new Person("John", "Doe");
const person2 = new Person("Anna", "Smith");
const person3 = new Person("Michał", "Kowalski");
const person4 = new Person("Alicja", "Nowak");
const person5 = new Person("Ola", "Zielińska");

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());
console.log(person4.introduce());
console.log(person5.introduce());

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// Hi, my name is John Doe.
// Hi, my name is Anna Smith.
// Hi, my name is Michał Kowalski.
// Hi, my name is Alicja Nowak.
// Hi, my name is Ola Zielińska.

export {};
