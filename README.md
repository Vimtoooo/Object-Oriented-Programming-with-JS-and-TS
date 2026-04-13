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

#### Example of Usage (JS):

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

### Understanding the 'this' Keyword:

The `this` keyword is JavaScript refers to the *object that is currently executing the code*. It allows you to access properties and methods of the current object.

#### Basic Syntax:

Let's start with a basic object:

JavaScript:

```js
let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
```

TypeScript:

```ts
let person: { name: string; age: number; greet(): void; } = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
```

Now if we call the `greet` method in either languages:

```js
person.greet();
```

The Output will be:

```
Hello, my name is John
```

#### Breakdown:

For the function call to execute correctly, the object was called in the `this.name` inside the `greet` method, which referred to the `name` property of the `person` object.


#### Example of Usage (JS):

```js
const player = {
    name: "Knight",
    health: 100,
    
    takeDamage: function(damage) {
        this.health -= damage;
    },
    
    getStatus: function() { return `${this.name} has ${this.health} health`; }
};


// Test
player.takeDamage(30);
console.log(player.getStatus()); // Should output: "Knight has 70 health"
```

##### Result:

```
Knight has 70 health
```

### Constructor Functions:

Constructor functions are special functions in all of object oriented programming that allows you to instantiate multiple objects with the same structure and behavior.

#### Basic Syntax:

Define a constructor function for a `Person` (JS ONLY):

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return "Hello, my name is " + this.name;
  };
};

// Creating a new Person object using the constructor:
const john = new Person("John", 30);
const tyler = new Person("Tyler", 35);
```

Here is a preview of what this will look like inside the object:

```js
// john object contains:
{
  name: "John",
  age: 30,
  greet: function() { return "Hello, my name is John"; }
}
```

#### Accessing Properties and call methods:

```js
console.log(john.name); // Outputs: John
console.log(john.greet()); // Outputs: Hello, my name is John
```

#### Why does it only work in JS?

In TypeScript, the use of the `this` keyword is only allowed inside classes, however, JavaScript would allow this kind of constructor outside of a class, but the constructor function may be converted to a class declaration, due to the use of the `new` keyword (only in OOP).

#### Example of Usage (JS ONLY):

```js
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.getSummary = function() { return `${this.title} was written by ${this.author} and has ${this.pages} pages`; }
};

const book = new Book("Harry Potter", "Rowling", 500);
console.log(book.getSummary());
```

##### Result:

```
Harry Potter was written by Rowling and has 500 pages
```