# Object Oriented Programming

This documentation covers most OOP concepts when it comes to programming languages like JavaScript and TypeScript. Feel free to read my notes!

## Objects & The 'this' Keyword:

### Quick Review: Objects

Objects work similar to instances that have become part of a certain class, including when you retrieve values from properties or atributes. They work like data containers, where you can transform these static data objects into dynamic, intelligent objects that can perform actions and manage their own state, and we will cover all of these concepts in object oriented programming!

#### Review of Objects:

What are objects? Well, they are collections of key-value pairs that let you store related data together. You could think of them like containers that hold information about something...

#### Basic Syntax:

Down below is the basic syntax of objects in JavaScript:

```js
// Object as a simple data container
const player = {
    name: "Alex",
    health: 100,
    level: 2,
    inventory: ["sword", "potion"]
};

// Accessing data
console.log(player.name);          // "Alex"
console.log(player.health);        // 100
console.log(player.inventory[0]);  // "sword" - access array element

// Updating data
player.health = 85;
```

Here is how it'll look like in TypeScript syntax:

```ts
// Object as a simple data container
const player: { name: string; health: number; level: number; inventory: string[] }  = {
    name: "Alex",
    health: 100,
    level: 2,
    inventory: ["sword", "potion"]
};

// Accessing data
console.log(player.name);          // "Alex"
console.log(player.health);        // 100
console.log(player.inventory[0]);  // "sword" - access array element

// Updating data
player.health = 85;
```

#### Diferences between JavaScript and TypeScript:

|      **Features**      |          **JavaScript (JS)**          |          **TypeScript (TS)**          |
| :--------------------: | ------------------------------------- | ------------------------------------- |
|       **Typing**       | **Dynamic**: Types are determined during runtime; variables can change types freely. | **Static**: Types are defined upfront and checked during development/compilation. |
|  **Error Detection**   | Errors are usually caught only at **runtime** when the code is executed. | Errors are caught at **compile-time**, often highlighted immediately in your editor. |
|      **Execution**     | Runs directly in modern browsers and Node.js. | Must be **transpiled** (converted) into plain JavaScript before it can run. |
|      **Features**      | Primarily prototype-based; lacks built-in support for interfaces or generics. | Adds powerful tools like **interfaces, generics, enums, and access modifiers** (private/public). |
|   **File Extension**   | Uses `.js` or `.jsx`. | Uses `.ts` or `.tsx`. |

The primary difference is that JavaScript is a dynamic language type when it comes to declaring variables (similar to Python), a variable can hold any type of value during runtime and not need any type annotations. Whereas TypeScript introduces static types (similar to Java), making variables able to hold only one or an union of fixed types. Note that TypeScript is a superset of JavaScript, meaning that all valid JavaScript code is also valid in TypeScript code, but with additional features designed to improve code readability, reliability and maintainability.

### Adding Methods to Objects:

Objects in JavaScript can contain not only data properties but also methods - function that belong to the object.

#### Basic Syntax:

Create a simple object with a method:

JavaScript:

```js
const person = {
    name: "Brad",
    greet: function() {
        return "Hello!";
    }
};

person.greet(); // Returns "Hello!"
```

TypeScript:

```ts
// Creating a method to the object:
const person: { name: string; greet(): string } = {
    name: "Brad",
    greet: function(): string { return "Hello!"; }
};

// Calling the method:
console.log(person.greet())  // Returns "Hello!"
```

You can also use shorthand syntax introduced in ES6:

JavaScript:

```js
const person = {
    name: "John",
    greet() {
        return "Hello!";
    }
};
```

TypeScript:

```ts
const person: { name: string; greet(): string } = {
    name: "John",
    greet(): string {
        return "Hello!";
    }
};
```

#### Example of Usage:

```js
// The calculator object already exists
const calculator = {
  //  The add method would return the sum of two numbers
  add(n1, n2) {
    return n1 + n2;
  }
};

console.log(calculator.add(2, 5));
```

##### Result:

```
7
```