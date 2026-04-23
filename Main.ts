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

// export class Thermostat {
//   public room: string;
//   public currentTemp: number;

//   constructor(room: string, currentTemp: number) {
//     this.room = room;
//     this.currentTemp = currentTemp;
//   }
  
//   // Add the increaseTemp() method that increases temperature by 1 degree
//   increaseTemp() { this.currentTemp++; }
//   // Add the decreaseTemp() method that decreases temperature by 1 degree
//   decreaseTemp() { this.currentTemp--; }
// }

// const counter: { count: number; increment(): object; decrement(): object; getValue(): number; } = {
//   count: 0,
  
//   increment() {
//     this.count++;
//     return this;
//   },
  
//   decrement() {
//     this.count--;
//     return this;
//   },
  
//   getValue() {
//     return this.count;
//   }
// };

// function createUser(name: string, email: string): { getName(): string; getEmail(): string; setName(newName: string): void } {
//   // These variables are private (encapsulated)
//   let userName: string = name;
//   let userEmail: string = email;
  
//   // Return an object with methods to interact with the private data
//   return {
//     getName: function():  string {
//       return userName;
//     },
//     getEmail: function(): string {
//       return userEmail;
//     },
//     setName: function(newName: string): void {
//       userName = newName;
//     }
//   };
// }
// const encapsulatedUser = createUser("John", "john@example.com");

// class User {
//   private userName: string;
//   private userEmail: string;

//   constructor(userName: string, userEmail: string) {
//     this.userName = userName;
//     this.userEmail = userEmail;
//   };

//   getName(): string { return this.userName; }
//   getEmail(): string { return this.userEmail; }
//   setName(newName: string): void { this.userName = newName; }
// };

// const myUser: User = new User("Brad", "BigBrad@example.com");

// console.log(myUser.getName());  // "Brad"
// console.log(myUser.getEmail()); // "BigBrad@example.com"

// class Student {
//   public name: string;
//   private grade: number;
  
//   constructor(name: string, grade: number) {
//     this.name = name;
//     this.grade = grade;
//   }
  
//   getGrade(): number {
//     return this.grade;
//   }
  
//   updateGrade(newGrade: number): void {
//     this.grade = newGrade;
//   }
// }

// class Counter {
//   private count: number = 0;
  
//   // Create a private method
//   private increment(): void {
//     this.count++;
//   }
  
//   // Public method that uses the private method
//   addOne(): number {
//     this.increment();
//     return this.count;
//   }
// }

// const myCounter = new Counter();

// console.log(myCounter.addOne());

// export class MessageBox {
//   private message: string = "";
  
//   setMessage(text: string): string {
//     if (this.isValidMessage(text)) {
//       this.message = text;
//       return "Message set!";
//     }
//     return "Invalid message!";
//   }
  
//   getMessage(): string {
//     return this.message;
//   }
  
//   // Add a private method called #isValidMessage(text)
//   private isValidMessage(text: string): boolean {
//     if (text.length === 0 || text.length >= 100) return false;

//     // Make it return true if the text is not empty and less than 100 characters, otherwise return false
//     return true;
//   }
// }
// class Vehicle {
//   public brand: string;
//   public model: string;
//   constructor(brand: string, model: string) {
//     this.brand = brand;
//     this.model = model;
//   }
//   drive(): void {
//     console.log("Driving!");
//   }
// }

// // Car inherits from Vehicle
// class Car extends Vehicle {
//  honk(): void {
//    console.log("Beep beep!");
//  }
// }

// const myCar = new Car("Toyota", "Camry");
// console.log(myCar.brand);  // "Toyota" - inherited from Vehicle
// console.log(myCar.model);  // "Camry" - inherited from Vehicle
// // Car can access Vehicle's methods
// myCar.drive();  // "Driving!" - inherited from Vehicle
// // Car also has its own methods
// myCar.honk();   // "Beep beep!" - specific to Car

class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  
  speak(): string {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  // The Dog class inherits from Animal
}