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
// function greet() {
//     console.log("Hello there!");
// }

// export { greet };

// import user from './Test.js';

// console.log(user.name);

import { add as sum, subtract } from './Test.js';

