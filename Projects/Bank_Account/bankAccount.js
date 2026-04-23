export class BankAccount {
    // Add a private field called #balance
    #balance;
 
    // Change this.balance to this.#balance
    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
    }

    // Change this.balance to this.#balance in the getBalance() method
    getBalance() {
        return this.#balance;
    }

    // Change this.balance to this.#balance in the getAccountInfo() method
    getAccountInfo() {
        return `${this.accountHolder}: $${this.#balance}`;
    }

    // Change this.balance to this.#balance in the deposit(amount) method
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}`);
        } else {
            console.log(`Invalid deposit amount`);
        }
    }

    // Change this.balance to this.#balance in the withdraw(amount) method
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew $${amount}`);
        } else {
            console.log(`Invalid withdrawal amount or insufficient funds`);
        }
    }
}