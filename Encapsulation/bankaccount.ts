// In object-oriented programming (OOP), encapsulation is a mechanism that prevents the direct access or modification of an object's internal state. 

// It allows objects to be treated as a single, self-contained entity and ensures that the internal state of an object can only be modified through a defined set of methods.

// Encapsulation is often used to hide the implementation details of an object and protect its internal state from being accessed or modified by external actors.

// It's main purpose is to protect the integrity of the data and internal logic of objects by making it inaccessible to the outside world, and therefore provides a way to control the access to an object's internal state


class BankAccount {
  private balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }
  deposit(amount: number) {
    this.balance += amount;
  }
  withdraw(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }
  getBalance() {
    return this.balance;
  }
}

let myAccount = new BankAccount(1000);
console.log(myAccount.getBalance()); // 1000
myAccount.deposit(100);
console.log(myAccount.getBalance()); // 1100
myAccount.withdraw(200);
console.log(myAccount.getBalance()); // 900
myAccount.withdraw(2000);
console.log(myAccount.getBalance()); // 900, "Insufficient funds"

// In this example, the BankAccount class demonstrates encapsulation by using the private keyword to restrict direct access to the balance property. 

// Instead of directly accessing the balance property, users of the class must use the deposit(), withdraw(), and getBalance() methods to interact with it, which provides an additional level of control and security.

//  This way we can control the state of object, and users of the class will not be able to accidentally make invalid updates to the balance.