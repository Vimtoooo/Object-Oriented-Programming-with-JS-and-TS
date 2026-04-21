// Create a class named BankAccount
class BankAccount {

    // Add a constructor that takes two parameters: accountHolder and initialBalance (defaults to 0)
    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.initialBalance = !initialBalance ? 0 : initialBalance;
    }

    // Add a method getBalance() that returns the current account balance
    getBalance() { return this.initialBalance; }

    // Add a method getAccountInfo() that returns a formatted string: "${accountHolder}: $${balance}"
    getAccountInfo() { return `${this.accountHolder}: $${this.initialBalance}`; }
}

// Test
const testAccount = new BankAccount('Alex Johnson', 500);

console.log('Initial state:');
console.log(testAccount.getAccountInfo()); // "Alex Johnson: $500"
console.log('Balance:', testAccount.getBalance()); // 500