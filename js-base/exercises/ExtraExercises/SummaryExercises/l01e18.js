// Your task:
// 1. Create a class named `BankAccount`.
//    - It should have two properties: `ownerName` (string) and `balance` (number).
//    - These should be set in the constructor.
// 2. Add a method `deposit(amount)` that adds money to the account.
// 3. Add a method `withdraw(amount)` that subtracts money from the account.
//    - ⭐ Add a check so that withdrawal is only possible if the balance is enough.
// 4. Add a method `getBalance()` that returns the current balance.
// 5. Create an instance of the class:
//    - Owner: "Piotr", initial balance: 300
// 6. Perform the following operations:
//    - Deposit: 200
//    - Withdraw: 400
// 7. Use `console.log()` to print the final balance.

// To test your solution in terminal, run:
// npm run l01e18

//// TODO:
// here place your solution:

class BankAccount {
  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amountToDeposit) {
    this.balance += amountToDeposit;
  }

  withdraw(amountToWithdraw) {
    if (amountToWithdraw <= this.balance) {
      this.balance -= amountToWithdraw;
    } else {
      console.warn("Not enough funds");
    }
  }
  getBalance() {
    return this.balance;
  }
}

const piotrBankAccount = new BankAccount("Piotr", 300);
piotrBankAccount.deposit(200);
piotrBankAccount.withdraw(400);
console.log(piotrBankAccount.getBalance());

// 👇 Example expected output in console:
// 100

//// TIPS – use if you get stuck:
/// Tip 1 – Use `this.balance` to update balance in deposit/withdraw
/// Tip 2 – In withdraw, use `if (this.balance >= amount)` to block invalid operation
/// Tip 3 – To return balance, just return `this.balance`
