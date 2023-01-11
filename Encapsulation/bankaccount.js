var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var myAccount = new BankAccount(1000);
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
