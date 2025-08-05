// your task:
// 1. Create a class named 'BankAccount' that:
//    - accepts initial balance in constructor
//    - has a method 'deposit(amount: number)' that adds funds
//    - has a method 'withdraw(amount: number)' that removes funds if balance allows
//    - records all operations in 'operations' array as strings
//    - has a method 'getHistory()' that returns the operations array
//    - has a method 'getBalance()' that returns current balance
// 2. Test your class with provided scenario

// to test your solution in terminal you can run following command:
// npm run bonus25

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your class here

class BankAccount {
  constructor(public balance: number) {
    this.operations = [];
  }
  deposit(amount: number): void {
    this.balance += amount;
    this.operations.push(`Deposit: ${amount}`);
  }
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.operations.push(`Withdraw: ${amount}`);
    } else {
      this.operations.push(`Failed withdrawal: ${amount}`);
    }
  }
  operations: string[];
  getHistory() {
    return this.operations;
  }
  getBalance(): number {
    return this.balance;
  }
}

// Test scenario:
const account = new BankAccount(100);
console.log(`Initial balance: ${account.getBalance()}`);

account.deposit(50);
console.log(`After deposit: ${account.getBalance()}`);

account.withdraw(30);
console.log(`After withdraw: ${account.getBalance()}`);

account.withdraw(200);
console.log(`After failed withdraw: ${account.getBalance()}`);

console.log("History:");
account.getHistory().forEach(operation => console.log(operation));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// Initial balance: 100
// After deposit: 150
// After withdraw: 120
// After failed withdraw: 120
// History:
// Deposit: 50
// Withdraw: 30
// Failed withdrawal: 200

export {};
