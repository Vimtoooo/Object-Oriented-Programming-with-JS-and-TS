class BankAccount {
    public accountHolder: string;
    public initialBalance: number;

    constructor(accountHolder: string, initialBalance: number | undefined) {
        this.accountHolder = accountHolder;
        this.initialBalance = initialBalance !== undefined ? initialBalance : 0;
    }

    getBalance(): number { return this.initialBalance; }
    getAccountInfo(): string { return `${this.accountHolder}: $${this.initialBalance}`; }
}