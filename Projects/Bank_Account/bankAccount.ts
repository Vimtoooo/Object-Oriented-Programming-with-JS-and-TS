// class BankAccount {
//     public accountHolder: string;
//     public initialBalance: number;

//     constructor(accountHolder: string, initialBalance: number | undefined) {
//         this.accountHolder = accountHolder;
//         this.initialBalance = initialBalance !== undefined ? initialBalance : 0;
//     };

//     deposit(amount: number): void {
//         if (amount > 0) {
//             this.initialBalance += amount;
//             console.log(`Deposited $${amount}`);
//             return;
//         };

//         console.log("Invalid deposit amount");
//     };

//     withdraw(amount: number): void {
//         if (amount > 0 && amount <= this.initialBalance) {
//             this.initialBalance -= amount;
//             console.log(`Withdrew $${amount}`);
//             return;
//         };

//         console.log("Invalid withdrawal amount or insufficient funds");
//     };

//     getBalance(): number { return this.initialBalance; }
//     getAccountInfo(): string { return `${this.accountHolder}: $${this.initialBalance}`; }
// };