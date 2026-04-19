// Object as a simple data container
// const player: { name: string; health: number; level: number; inventory: string[] }  = {
//     name: "Alex",
//     health: 100,
//     level: 2,
//     inventory: ["sword", "potion"]
// };

// Accessing data
// console.log(player.name);          // "Alex"
// console.log(player.health);        // 100
// console.log(player.inventory[0]);  // "sword" - access array element

// Updating data
// player.health = 85;

// // Creating a method to the object:
// const person: { name: string; greet(): string } = {
//     name: "Brad",
//     greet: function(): string { return "Hello!"; }
// };

// Calling the method:
// console.log(person.greet())     // Returns "Hello!"

// Exporting functions:
// File: math-utils.js
// A function that adds two numbers
// function add(a: number, b: number): number {
//     return a + b;
// }
// // A function that multiplies two numbers
// function multiply(a: number, b: number): number {
//     return a * b;
// }
// Export the functions so other files can use them
// export { add, multiply };

// Export functions directly
// export function add(a: number, b: number): number {
//     return a + b;
// }
// export function multiply(a: number, b: number): number {
//     return a * b;
// }

// class Person {

//     public name: string;
//     public age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     };
// };

// // const me = new Person("Blue", 21);
// // console.log(me.name)

// // Create a class named Car
// class Car {

//     make: string;
//     model: string;

//     // Add a constructor that takes two parameters: make and model
//     constructor(make: string, model: string) {

//         // Set these values (make and model) as properties of the object
//         this.make = make;
//         this.model = model;
//     };
// };

// const car = new Car("Honda", "Civic");
// console.log(car.make)
// console.log(car.model)

// class Car {
//     public make: string;
//     public model: string;

//     constructor(make: string, model: string) {
//         this.make = make;
//         this.model = model;
//     };

//     getDescription(): string {
//         return `This car is a ${this.make} ${this.model}.`;
//     };
// };

// const myCar = new Car('Toyota', 'Corolla');
// console.log(myCar.make);  // Output: 'Toyota'
// console.log(myCar.model); // Output: 'Corolla'

// Create a class named Book and export it

// import { Book } from "./Test.ts";

// const myBook: Book = new Book("JavaScript Basics", "John Doe", 200);
// console.log(myBook.getInfo());

// Create the VendingMachine class and export it
// export class VendingMachine {
//     // Properties:
//     public location: string;
//     public drinks: number;

//     // Add a constructor that takes location (string) and drinks (number) parameters
//     constructor(location: string, drinks: number) {
//         this.location = location;
//         this.drinks = drinks;
//     };
//     // Add getStatus() method that returns a string like "Cafe machine: 15 drinks left"
//     getStatus() {
//         return `Cafe machine: ${this.drinks} drinks left`;
//     };
// };

// class BankAccount {
//     public owner: string;
//     private balance: number;

//   constructor(owner: string, balance: number = 0) {
//     this.owner = owner;
//     this.balance = balance;
//   }
  
//   deposit(amount: number) {
//     this.balance += amount;
//   }

//   withdraw(amount: number) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//     }
//   }
  
//   transfer(amount: number, toAccount: BankAccount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//       toAccount.balance += amount;
//     }
//   }
// }


export class Thermostat {
  public room: string;
  public currentTemp: number;

  constructor(room: string, currentTemp: number) {
    this.room = room;
    this.currentTemp = currentTemp;
  }
  
  // Add the increaseTemp() method that increases temperature by 1 degree
  increaseTemp() { this.currentTemp++; }
  // Add the decreaseTemp() method that decreases temperature by 1 degree
  decreaseTemp() { this.currentTemp--; }
}