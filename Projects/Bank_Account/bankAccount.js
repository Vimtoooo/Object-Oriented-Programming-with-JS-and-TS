// Create a class named BankAccount
class BankAccount {

    // Add a constructor that takes two parameters: accountHolder and initialBalance (defaults to 0)
    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.initialBalance = !initialBalance ? 0 : initialBalance;
    }

    // Add the deposit(amount) method
    deposit(amount) {
        // The method should check if the amount is positive (greater than 0)
        if (amount > 0) {
            // If valid: Adds the amount to the balance and logs: Deposited $${amount},
            this.initialBalance += amount;
            console.log(`Deposited $${amount}`);
            return;
        }

        // otherwise logs: Invalid deposit amount
        console.log("Invalid deposit amount");
    }

    // Add the withdraw(amount) method
    withdraw(amount) {
        // The method should check if the amount is positive AND less than or equal to current balance
        if (amount > 0 && amount <= this.initialBalance) {
            // If valid: Subtracts the amount from the balance and logs: Withdrew $${amount},
            this.initialBalance -= amount;
            console.log(`Withdrew $${amount}`);
            return;
        }

        // otherwise logs: Invalid withdrawal amount or insufficient funds
        console.log("Invalid withdrawal amount or insufficient funds");
    }

    // Add a method getBalance() that returns the current account balance
    getBalance() { return this.initialBalance; }

    // Add a method getAccountInfo() that returns a formatted string: "${accountHolder}: $${balance}"
    getAccountInfo() { return `${this.accountHolder}: $${this.initialBalance}`; }
}

// Test the implementation
const testAccount = new BankAccount('Alex Johnson', 500);

console.log('Initial state:');
console.log(testAccount.getAccountInfo()); // "Alex Johnson: $500"

testAccount.deposit(200);  // Logs: "Deposited $200"
console.log('New balance:', testAccount.getBalance()); // 700

testAccount.deposit(-50);  // Logs: "Invalid deposit amount"
console.log('Balance unchanged:', testAccount.getBalance()); // 600

testAccount.withdraw(100); // Logs: "Withdrew $100"
console.log('New balance:', testAccount.getBalance()); // 600

testAccount.withdraw(800); // Logs: "Invalid withdrawal amount or insufficient funds"
console.log('Balance unchanged:', testAccount.getBalance()); // 600


export { BankAccount };