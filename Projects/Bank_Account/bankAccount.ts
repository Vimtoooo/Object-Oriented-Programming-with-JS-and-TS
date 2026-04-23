class BankAccount {
    public accountHolder: string;
    private balance: number;

    constructor(accountHolder: string, initialBalance: number = 0) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    };

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}`);
            return;
        };

        console.log("Invalid deposit amount");
    };

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}`);
            return;
        };

        console.log("Invalid withdrawal amount or insufficient funds");
    };

    getBalance(): number { return this.balance; }
    getAccountInfo(): string { return `${this.accountHolder}: $${this.balance}`; }
};