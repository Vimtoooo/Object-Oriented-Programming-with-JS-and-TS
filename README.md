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

Constructor functions are special functions in all of object oriented programming and also during normal object declarations that allows you to instantiate multiple objects with the same structure and behavior.

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

### The 'new' Keyword:

The `new` keyword in JavaScript is used to create instances of constructor functions, with act as templates for creating objects:

#### Basic Syntax (JS ONLY):

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return "Hello, my name is " + this.name;
  };
}
```

Use the `new` keyword to create an instance:

```js
const john = new Person("John", 30);
```

After executing the above code, the `john` variable will become an object with properties and a method:

* `john.name` is "John"
* `john.age` is 30
* `john.greet()` return "Hello, my name is John"

Without the `new` keyword, `this` would refer to the global object (or undefined in strict mode), not the new instance.

#### Example of Usage (JS ONLY):

```js
function Car(name, year) {
    this.name = name;
    this.year = year;
    
    this.getDescription = function() {
        return "This is a " + this.name + " from " + this.year;
    };
};

// Create a new car object using the new keyword, pass "Honda" as the name and 2018 as the year
const myCar = new Car("Honda", 2018);

// Call the getDescription method on your car object and print the result to the console
const result = myCar.getDescription();
console.log(result);
```

##### Result:

```
This is a Honda from 2018
```

### Recap - Objects & the 'this' Keyword:

Here is a summary of this particular section:

#### Objects:

Objects are special collections that relate to key-value pairs for data storing.

JavaScript:

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

TypeScript:

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

#### Adding Methods to Objects:

##### Traditional Syntax:

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
const person: { name: string; greet(): string; } = {
    name: "Brad",
    greet: function() {
        return "Hello!";
    }
};

person.greet(); // Returns "Hello!"
```

##### Shorthand Syntax:

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

#### The 'this' Keyword withing Objects:

The `this` keyword is used to refer to the object which is being used to retrieve its unique data.

JavaScript:

```js
let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet()  // Output: "Hello, my name is John"
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

person.greet()  // Output: "Hello, my name is John"
```

#### Constructor Functions (JS ONLY):

Constructor functions are unique for initializing objects within object oriented programming, but for this case, we will create an instance which would not come from a traditional class:

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

#### The 'new' Keyword (JS ONLY):

The `new` keyword in JavaScript is used to create instances of constructor functions, with act as templates for creating objects. We will still be referring to the constructor functions that are used outside of classes (which only works in JavaScript):

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return "Hello, my name is " + this.name;
  };
}

// Use the `new` keyword to create an instance:
const john = new Person("John", 30);

john.name     // Returns "John"
john.greet()  // "Hello, my name is John"
```

#### Example of a Program (JS ONLY):

```js
function Thermostat(room) {
    this.room = room;
    this.temperature = 22;
    this.isOn = true;
    this.increaseTemp = function() { this.temperature++ }
    this.decreaseTemp = function() { this.temperature--; };
    this.getStatus = function() { return `${this.room} thermostat: ${this.temperature}°C`; };
};

const livingRoom = new Thermostat("Living Room");
livingRoom.increaseTemp();
livingRoom.increaseTemp();
console.log(livingRoom.getStatus()); // Should print: "Living Room thermostat: 24°C"

const bedroom = new Thermostat("Bedroom");
bedroom.decreaseTemp();
bedroom.decreaseTemp();
console.log(bedroom.getStatus()); // Should print: "Bedroom thermostat: 20°C"
```

##### Result:

```
Living Room thermostat: 24°C
Bedroom thermostat: 20°C
```

## Organizing Code:

### What are Modules?

When your JavaScript code grows large and complex, it becomes difficult to manage everything in one file. The solution is **modules**: splitting your code into separate, organized files.

A **module** is a JavaScript file that contains related code. Each module handles one specific job, making your application easier to understand and maintain.

A JavaScript module is a regular `.js` file that can **export code** (variables, functions, classes) so other files can **import and use it**.

#### Basic Syntax (JS ONLY):

This is a messy file (everything within one file):

```js
// file: messy-app.js
let user = "John";
let score = 0;

function login() {
  console.log("Welcome " + user);
}

function addPoints(points) {
  score += points;
}
```

Now, this represents two separate files (two files organized with modules):

```js
// file: user-module.js
let user = "John";
function login() {
  console.log("Welcome " + user);
}
// file: game-module.js
let score = 0;
function addPoints(points) {
  score += points;
}
```

#### Breakdown:

* **user-module.js**: It handles user authentication and user-related data and contains the username and login functionality.
* **game-module.js**: It manages game scoring and points system and tracks the score and handles point calculations.

If you want to use specific classes, functions or variables from an external module, you would need to **export what you want to use outside of that module and import it in the file that you wish to utilize it**. Note that we will learn about importing and exporting later on!

#### Example of Usage:

game-module.js:

```js
let score = 0;

export function addPoints(points) {
  score += points;
  console.log(`Score increased! Current score: ${score}`)
}
```4

user-module.js:

```js
import { addPoints } from './game-module.js';
let user = "John";

// Call the addPoints function with the value 10
addPoints(10);
```

##### Result:

```
Score increased! Current score: 10
```

### Exporting with 'export':

When organizing your JavaScript or TypeScript code across multiple files, the `export` keyword allows you to expose functions, variables, and other code so they can be used in other files.

#### Basic Syntax:

Let's create two simple functions that we want to export:

##### ES Module Traditional Syntax:

TypeScript:

```ts
// File: math-utils.js
// A function that adds two numbers
function add(a: number, b: number): number {
    return a + b;
}
// A function that multiplies two numbers
function multiply(a: number, b: number): number {
    return a * b;
}
// Export the functions so other files can use them
export { add, multiply };
```

JavaScript:

```js
// File: math-utils.js
// A function that adds two numbers
function add(a, b) {
    return a + b;
}
// A function that multiplies two numbers
function multiply(a, b) {
    return a * b;
}
// Export the functions so other files can use them
export { add, multiply };
```

##### ES Module Inline Syntax:

TypeScript:

```ts
// Export functions directly
export function add(a: number, b: number): number {
    return a + b;
}
export function multiply(a: number, b: number): number {
    return a * b;
}
```

JavaScript:

```js
export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}
```

#### CommonJS Traditional Export Syntax:

JavaScript:

```js
// Exporting functions
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Export as an object
module.exports = {
    add,
    multiply
};

// Or assign them in one line:
module.exports = { add, multiply }
```

##### CommonJS Inline Syntax:

JavaScript:

```js
// Assign directly to module.exports.functionName
module.exports.add = function(a, b) {
    return a + b;
};

module.exports.multiply = function(a, b) {
    return a * b;
};
```

#### Comparison:

|             **Syntax**            |    **Type**    |     **Inline?**      |
| :-------------------------------: | -------------- | -------------------- |
|      `export function add()`      |   ES Modules   |         Yes          |
|     `module.exports = { add }`    |    CommonJs    |     Semi-inline      |
| `module.exports.add = function()` |    CommonJS    |         Yes          |

#### Key Differences:

CommonJS doesn't have a true "inline export" keyword like ES modules. You either assign to `module.exports` as an object, or assign individual properties to it. ES modules' `export function` is cleaner and more readable.

It is key to note that you can configure the syntax of how TypeScript syntax should be treated via `tsconfig.json` and `package.json` files. For traditional and modern uses, use **ES Module (ESM)** written inside the `package.json` file as `"type": "module"`. In the other hand, for **CommonJS** syntax, replace it to `"type": "commonjs"`. To remove strict syntaxes, inside `tsconfig.json`, set:

```json
{
  "compilerOptions": {
    "verbatimModuleSyntax": false,  // False will disable strictness from your TypeScript code...
    // ...existing code...
  }
}
```

### Purpose of Different Module Syntaxes in TypeScript:

The reason that TypeScript offers a variety of syntaxes is to:

* **Support Legacy Code**: Work with existing CommonJS projects.
* **Enable Modern Development**: Write ES module syntax while targeting any environment.
* **Compile to Target**: Single source can compile to CommonJS, ESM, or others via `tsconfig.json`..

#### Configurations Example in tsconfig.json:

```json
{
  "compilerOptions": {
    "module": "esnext",           // Compile to ES modules
    "target": "ES2020",           // Modern JavaScript
    "verbatimModuleSyntax": true  // Enforce correct syntax
  },
  "type": "module"  // In package.json - tells Node.js this is ESM
}
```

#### ES Modules (ESM) — Modern Standard:

```ts
export function add(a: number, b: number): number {
    return a + b;
}

import { add } from './math-utils';
```

##### Purpose:

- Official JavaScript standard (ES2015+).
- Supported in modern browsers and recent Node.js versions.
- Static imports enable tree-shaking and optimization.
- Cleaner, more readable syntax.

#### CommonJS (CJS) — Legacy Node.js Standard:

```js
function add(a, b) {
    return a + b;
}

module.exports = { add };

const { add } = require('./math-utils');
```

##### Purpose:

- Original Node.js module system (pre-ES Modules).
- Still used in many existing projects.
- Dynamic imports allow runtime flexibility.
- Better for older Node.js environments.

#### Summary:

|      **Aspect**      |           **ES Modules**           |           **CommonJS**           |
| :------------------: | ---------------------------------- | -------------------------------- |
|      **Syntax**      |          `import`/`export`         |    `require`/`module.exports`    |
|     **Loading**      |        Static (compile-time)       |         Dynamic (runtime)        |
|   **Tree-shaking**   |             Supported              |           Not Supported          |
|     **Browser**      |               Native               |           Needs Bundler          |
|     **Use Case**     |           Modern Projects          |       Legacy/Compatibility       |

Use **ES Modules** for new projects, TypeScript makes it easy to target whatever environment you need without changing your source code.

### Importing with 'import':

After exporting functionality from a module, we need to import it to use it in another file. The `import` statement allows us to bring in exported values from other modules.

#### Basic Syntax (JS ONLY):

Exporting the function:

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
};

export { greet };
```

Import a named export:

```js
// Importing a specific function from a module
import { greet } from './greeting.js';

// Now we can use the greet function
greet('John'); // Outputs: Hello, John!
```

##### Importing Multiple named Exports:

```js
// Importing multiple exports
import { greet, farewell } from './greeting.js';

greet('John');      // Outputs: Hello, John!
farewell('John');   // Outputs: Goodbye, John!
```

##### Import a Default Export:

```js
// Importing a default export (no curly braces needed)
// Use this when the other file has: export default functionName
import Person from './person.js';

// Create a new Person
const john = new Person('John');
```

#### Example of Usage (JS ONLY):

validation-utils.js:

```js
export function validateEmail(email) {
    return email.includes('@') && email.includes('.');
}

export function validatePassword(password) {
    return password.length >= 8;
}
```

main.js:

```js
import { validateEmail } from './validation-utils.js';

const result = validateEmail("user@example.com");
console.log(result);
```

##### Result:

```
true
```

### Default Vs. Named Exports:

In JavaScript modules, you have two main ways to export your code: name exports and default exports.

