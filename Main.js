// Object as a simple data container
var player = {
    name: "Alex",
    health: 100,
    level: 2,
    inventory: ["sword", "potion"]
};
// Accessing data
// console.log(player.name);          // "Alex"
// console.log(player.health);        // 100
// console.log(player.inventory[0]);  // "sword" - access array element
// Updating data
player.health = 85;
// Creating a method to the object:
var person = {
    name: "Brad",
    greet: function () { return "Hello!"; }
};
// Calling the method:
console.log(person.greet()); // Returns "Hello!"

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, my name is ${this.name}`;
    }
};