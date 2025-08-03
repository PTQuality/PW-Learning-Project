// your task:
// 1. Create a class named 'BankAccount' that:
//    - has a property 'balance' of type 'number'
//    - has a constructor that initializes the balance
//    - has a method 'deposit(amount: number)' that increases balance
//    - has a method 'withdraw(amount: number)' that decreases balance (only if sufficient funds)
//    - has a method 'getBalance()' that returns current balance
//    - all methods should have proper return types
// 2. Test your class with provided scenario

// to test your solution in terminal you can run following command:
// npm run bonus22

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Place your class here

class BankAccount {
  constructor(public balance: number) {}
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log("Withdrawal succed");
    } else {
      console.log("Withdrawal failed");
    }
  }
  getBalance(): number {
    return this.balance;
  }
}

// Test scenario:
const account = new BankAccount(100);
console.log(`Initial balance: ${account.getBalance()}`);

account.deposit(50);
console.log(`After deposit 50: ${account.getBalance()}`);

account.withdraw(30);
console.log(`After withdraw 30: ${account.getBalance()}`);

account.withdraw(200);
console.log(`After withdraw 200 (insufficient funds): ${account.getBalance()}`);

console.log(`Final balance: ${account.getBalance()}`);

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Expected output:
// Initial balance: 100
// After deposit 50: 150
// After withdraw 30: 120
// After withdraw 200 (insufficient funds): 120
// Final balance: 120

export {};
