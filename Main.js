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
// var Car = /** @class */ (function () {
//     function Car(make, model) {
//         this.make = make;
//         this.model = model;
//     }
//     ;
//     return Car;
// }());
// ;
