// Your task:
// 1. Create User class with properties: name (string, required), age (integer > 0, required), email (string, required, email format)
// 2. Create UserManager class to manage list of users with methods to:
//    - Add user with data validation (name, age, email and email uniqueness)
//    - Remove user based on email
//    - Display all users in format "name: age: email"
//    - Calculate average age of users
//    - Filter users based on age (e.g. older than 18)
// 3. Test your classes with provided test data

// to test your solution in terminal You can run following command:
// npm run l01e24

//// TODO:
// here place your solution:
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}
class UserManager {
  constructor() {
    this.users = [];
  }
  addUser(user) {
    if (user.name && user.age > 0 && this.validateEmail(user.email)) {
      this.users.push(user);
    }
  }
  removeUser(email) {
    this.users = this.users.filter(user => user.email !== email);
  }

  displayUsers() {
    for (let user of this.users) {
      console.log(`name: ${user.name}, age: ${user.age}, email: ${user.email}`);
    }
  }
  calculateAverageAge() {
    let sumOfAge = 0;
    for (let user of this.users) {
      sumOfAge += user.age;
    }
    let averageAge = sumOfAge / this.users.length;
    return averageAge;
  }
  filterUsersByAge(age) {
    const usersFilteredByAge = this.users.filter(user => user.age > age);
    return usersFilteredByAge;
  }
  validateEmail(emailAddress) {
    let isUnique = true;
    for (let user of this.users) {
      if (user.email === emailAddress) {
        isUnique = false;
      }
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(emailAddress) && isUnique;
    return isValid;
  }
}
//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Test data to use:
const manager = new UserManager();
const user1 = new User("John Doe", 25, "john@example.com");
const user2 = new User("Jane Doe", 17, "jane@example.com");
const user3 = new User("Bob Smith", 30, "bob@example.com");
const user4 = new User("Alice Johnson", 22, "alice@example.com");
const user5 = new User("Alice Johnson", 22, "alice@example.com");

manager.addUser(user1); // Add user
manager.addUser(user2); // Add user
manager.addUser(user3); // Add user
manager.addUser(user4); // Add user
manager.addUser(user5); // Add user

console.log("=== All Users ===");
manager.displayUsers(); // Display all users

console.log("\n=== Average Age ===");
console.log(manager.calculateAverageAge()); // Display average age

console.log("\n=== Users older than 18 ===");
console.log(manager.filterUsersByAge(18)); // Filter users older than 18

manager.removeUser("jane@example.com"); // Remove user

console.log("\n=== After removing Jane ===");
manager.displayUsers();

// Expected output:
// After running this script on console You should display:
// All users with their data in format "name: age: email"
// Average age calculation
// Filtered users older than 18
// Updated user list after removal
