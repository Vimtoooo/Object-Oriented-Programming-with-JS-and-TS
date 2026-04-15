// Object as a simple data container
// var player = {
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
// Creating a method to the object:
// var person = {
//     name: "Brad",
//     greet: function () { return "Hello!"; }
// };
// Calling the method:
// console.log(person.greet()); // Returns "Hello!"

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         return `Hello, my name is ${this.name}`;
//     }
// };

// Creating a Thermostat object:
// function Thermostat(room) {
//     this.room = room;
//     this.temperature = 22;
//     this.isOn = true;
//     this.increaseTemp = function() { this.temperature++ }
//     this.decreaseTemp = function() { this.temperature--; };
//     this.getStatus = function() { return `${this.room} thermostat: ${this.temperature}°C`; };
// };

// livingRoom = new Thermostat("Living Room");
// livingRoom.increaseTemp();

// File: math-utils.js
// A function that adds two numbers
// function add(a, b) {
//     return a + b;
// }
// // A function that multiplies two numbers
// function multiply(a, b) {
//     return a * b;
// }
// // Export the functions so other files can use them
// export { add, multiply };

// Inline Export Syntax:
// Export functions directly
export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}