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

#### Basic Syntax in ESM (JS ONLY):

##### Named Exports:

Named exports allow you to export different values individually from a module:

```js
// math.js
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
```

When importing named exports, you must use the exact same names within curly braces:

```js
// app.js
import { add, subtract } from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(10, 4)); // 6
```

###### Renaming Named Exports:

If you need to rename a named import, use the `as` keyword to create an alias:

```js
// app.js
import { add as sum, subtract as minus } from './math.js';

console.log(sum(5, 3));   // 8
console.log(minus(10, 4)); // 6
```

##### Default Exports:

Default exports allow you to export a single main value form a module:

```js
// user.js
const user = {
  name: 'John',
  age: 30
};

export default user;
```

And when importing a default export, you can use any name you want without curly braces:

```js
// app.js
import person from './user.js';

console.log(person.name); // 'John'
```

#### When to use which?

Use **named exports** when a module provides related utilities (e.g., a collection of helper functions). In the other hand, use **default export** when a module has one primary purpose or main value value (e.g., a class, a component, or a configuration object).

#### Combining Export Types:

You can combine both types of exports in a single module:

```js
// vehicle.js
export const wheels = 4;
export const doors = 4;

const car = {
  brand: 'Toyota',
  model: 'Corolla'
};

export default car;
```

And import them together:

```js
// app.js
import myCar, { wheels, doors } from './vehicle.js';

console.log(myCar.brand);  // 'Toyota'
console.log(wheels);       // 4
```

#### Example of Usage:

calculator.js

```js
function calculate(a, b, operation) {
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
}

// Export square function as named here
export function square(x) {
    return x * x;
};

// Export calculate function as default here
export default calculate;
```

main.js

```js
// Import both functions here from calculator.js
import calculate, { square } from './calculator.js';

// Test
console.log(calculate(10, 5, '+')); // Should output 15
console.log(square(4));             // Should output 16
```

##### Result:

```
15
16
```

## Classes & Objects:

### What is a Class?

A class in JavaScript is a **blueprint for creating objects with pre-defined properties and methods**. Classes were introduced in ES6 and provide a cleaner, more intuitive syntax for creating objects and dealing with inheritance.

#### Basic Syntax:

Define a simple class called `Person`:

TypeScript:

```ts
class Person {

    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
};

const me = new Person("Blue", 21);
console.log(me.name)  // "Blue"
```

JavaScript:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
};

const me = new Person("Blue", 21);
console.log(me.name)  // "Blue"
```

##### The Constructor method:

The `constructor()` method is a special method that gets called when an object is created from the class.

#### Create an Instance of the Class:

```js
const john = new Person("John", 25);
```

#### Access Properties of the Created Object:

```js
console.log(john.name); // Output: "John"
console.log(john.age);  // Output: 25
```

#### Example of Usage:

TypeScript:

```ts
class Car {

    // Apply the properties with their encapsulations and types
    public make: string;
    public model: string;

    // Add a constructor that takes two parameters: make and model
    constructor(make: string, model: string) {

        // Set these values (make and model) as properties of the object
        this.make = make;
        this.model = model;
    };
};

const car = new Car("Honda", "Civic");
console.log(car.make)
console.log(car.model)
```

JavaScript:

```js
// Create a class named Car
class Car {

    // JavaScript does not need to specify properties, even when calling a constructor with this.propertyName!

    // Add a constructor that takes two parameters: make and model
    constructor(make, model) {

        // Set these values (make and model) as properties of the object
        this.make = make;
        this.model = model;
    };
};


const car = new Car("Honda", "Civic");
console.log(car.make)
console.log(car.model)
```

##### Result:

```
Honda
Civic
```

### Creating Instances:

After defining a class, you can create objects based on that class using the `new` keyword. These objects are called **instances**.

#### Basic Syntax (JS ONLY):

Let's say we have a simple `person` class:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}
```

Create an instance of the `Person` class:

```js
const john = new Person("John", 30);
```

After executing the above code, `john` will become an instance of the `Person` class with the following attributes:

* `name` property set to "John"
* `age` property set to 30

You can create multiple instances from the same class:

```js
const sarah = new Person("Sarah", 25);
console.log(sarah.name); // Outputs: Sarah
```

#### Example of Usage (JS ONLY):

student.js:

```js
export class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}
```

main.js:

```js
import { Student } from './student.js';

const student1 = new Student("Sarah", 85);
const student2 = new Student("Mike", 92);

// Test code - don't modify
console.log(student1.name);  // Should output "Sarah"
console.log(student2.grade); // Should output 92
```

##### Result:

```
Sarah
92
```

### Properties and Methods:

Classes in JavaScript allow us to define properties and methods that will be shared by all instances of the class.

#### Basic Syntax:

Create a class with properties:

TypeScript:

```ts
class Car {
    public make: string;
    public model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    };
};
```

JavaScript:

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  };
};
```

When creating an instance, the constructor sets these properties:

```js
const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.make);  // Output: 'Toyota'
console.log(myCar.model); // Output: 'Corolla'
```

#### Adding a Method to the Class:

TypeScript:

```ts
class Car {
    public make: string;
    public model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    };

    getDescription(): string {
        return `This car is a ${this.make} ${this.model}.`;
    };
};
```

JavaScript:

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  };
  
  getDescription() {
    return `This car is a ${this.make} ${this.model}.`;
  };
};
```

Now, we can call this method on any instance:

```js
const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getDescription()); // Output: 'This car is a Toyota Corolla.'
```

#### Example of Usage:

TypeScript:

```ts
export class Book {
    // Properties:
    public title: string;
    public author: string;
    public pages: number;
    
    // Add a constructor that takes title, author, and pages parameters
    constructor(title: string, author: string, pages: number) {
        // Set the title, author, and pages parameters as properties.
        this.title = title;
        this.author = author;
        this.pages = pages;
    };
    // Add a method called getInfo that returns a string in the format: “Title: [title], Author: [author], Pages: [pages]”
    getInfo() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    };
};
```

JavaScript:

```js
// Create a class named Book and export it
export class Book {
    // Add a constructor that takes title, author, and pages parameters
    constructor(title, author, pages) {
        // Set the title, author, and pages parameters as properties.
        this.title = title;
        this.author = author;
        this.pages = pages;
    };
    // Add a method called getInfo that returns a string in the format: “Title: [title], Author: [author], Pages: [pages]”
    getInfo() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    };
};
```

Main.js:

```js
import { Book } from './book.js';

// Test (do not modify this part)
const book = new Book("JavaScript Basics", "John Doe", 200);
console.log(book.getInfo());
```

##### Result:

```
Title: JavaScript Basics, Author: John Doe, Pages: 200
```

### Recap Challenge — The Vending Machine:

TypeScript:

```ts
export class VendingMachine {
    // Properties:
    public location: string;
    public drinks: number;

    // Add a constructor that takes location (string) and drinks (number) parameters
    constructor(location: string, drinks: number) {
        this.location = location;
        this.drinks = drinks;
    };
    // Add getStatus() method that returns a string like "Cafe machine: 15 drinks left"
    getStatus() {
        return `Cafe machine: ${this.drinks} drinks left`;
    };
};
```

JavaScript:

```js
// Create the VendingMachine class and export it 
export class VendingMachine {
    // Add a constructor that takes location (string) and drinks (number) parameters
    constructor(location, drinks) {
        this.location = location;
        this.drinks = drinks;
    };
    // Add getStatus() method that returns a string like "Cafe machine: 15 drinks left"
    getStatus() {
        return `Cafe machine: ${this.drinks} drinks left`;
    };
};
```

Main.js:

```js
import { VendingMachine } from './VendingMachine.js';

// Test - don't modify this part
const cafeMachine = new VendingMachine("Cafe", 20);
console.log(cafeMachine.getStatus()); // "Cafe machine: 20 drinks left"
```

##### Result:

```
Cafe machine: 20 drinks left
```

## Methods & Managing State:

### Methods that modify State:

Methods in JavaScript classes can modify the state (properties) of an object. This is one of the key features of object-oriented programming.

#### Basic Syntax:

Let's create a simple `BankAccount` class:

TypeScript:

```ts
class BankAccount {
    public owner: string;
    private balance: number;

  constructor(owner: string, balance: number = 0) {
    this.owner = owner;
    this.balance = balance;
  }
  
  deposit(amount: number) {
    this.balance += amount;
  }
}
```

JavaScript:

```js
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }
  
  deposit(amount) {
    this.balance += amount;
  }
}
```

Now let's create an instance and modify its state:

```js
const johnsAccount = new BankAccount("John", 100);
console.log(johnsAccount.balance); // Outputs: 100

johnsAccount.deposit(50);
console.log(johnsAccount.balance); // Outputs: 150
```

In this example, the `deposit()` method modifies the internal state (the `balance` property) of the `BankAccount` instance.

We can add more state-modifying methods:

TypeScript:

```ts
class BankAccount {
    public owner: string;
    private balance: number;

  constructor(owner: string, balance: number = 0) {
    this.owner = owner;
    this.balance = balance;
  }
  
  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
  
  transfer(amount: number, toAccount: BankAccount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      toAccount.balance += amount;
    }
  }
}
```

JavaScript:

```js
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }
  
  deposit(amount) {
    this.balance += amount;
  }
  
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
  
  transfer(amount, toAccount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      toAccount.balance += amount;
    }
  }
}
```

Now, we can manipulate our bank account in multiple ways!

#### Example of Usage:

TypeScript:

```ts
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
```

JavaScript:

```js
export class Thermostat {
  constructor(room, currentTemp) {
    this.room = room;
    this.currentTemp = currentTemp;
  }
  
  // Add the increaseTemp() method that increases temperature by 1 degree
  increaseTemp() { this.currentTemp++; }
  //  Add the decreaseTemp() method that decreases temperature by 1 degree
  decreaseTemp() { this.currentTemp--; }
}
```

Main.js:

```js
import { Thermostat } from './thermostat.js';

// Test code - don't modify
const livingRoom = new Thermostat("Living Room", 20);

livingRoom.increaseTemp();
livingRoom.increaseTemp();
console.log(livingRoom.currentTemp); // Should output 22

livingRoom.decreaseTemp();
console.log(livingRoom.currentTemp); // Should output 21
```

##### Result:

```
22
21
```

### Method Chaining Pattern:

Method chaining is a programming pattern that allows you to *call multiple methods on the same object in a single statement*. Each method returns the object itself (`this`), enabling you to call the next method on the same line.

#### Basic Syntax:

Create a simple counter object:

TypeScript:

```ts
const counter: { count: number; increment(): object; decrement(): object; getValue(): number; } = {
  count: 0,
  
  increment() {
    this.count++;
    return this;
  },
  
  decrement() {
    this.count--;
    return this;
  },
  
  getValue() {
    return this.count;
  }
};
```

JavaScript:

```js
const counter = {
  count: 0,
  
  increment() {
    this.count++;
    return this;
  },
  
  decrement() {
    this.count--;
    return this;
  },
  
  getValue() {
    return this.count;
  }
};
```

Now, you can chain methods together:

```js
// Chain multiple operations
counter.increment().increment().decrement();

// The count is now 1
console.log(counter.getValue()); // Output: 1
```

The key to method chaining is returning `this` from each method that you want to be chainable.

#### Example of Usage (JS ONLY):

```js
export const calculator = {
  value: 0,
  
  add(n) {
    this.value += n;
    return this;
  },
  
  subtract(n) {
    this.value -= n;
    return this;
  },
  
  multiply(n) {
    this.value *= n;
    return this;
  },
  
  divide(n) {
    this.value /= n;
    return this;
  },
  
  getValue() {
    return this.value;
  }
};
```

##### Result:

```
20
4
```

## Encapsulation & Access:

### Encapsulation:

**Encapsulation** is a process of combining data inside a class within one unit.

This helps to put restrictions on accessing class data directly, eventually helping us to prevent any accidental modification of data.

#### Basic Syntax:

Let's see encapsulation in action with a simple example. Create a basic object with public properties:

TypeScript:

```ts
const user: { name: string; email: string; } = {
  name: "John",
  email: "john@example.com"
};
```

JavaScript:

```js
const user = {
  name: "John",
  email: "john@example.com"
};
```

Now anyone can directly access and modify these properties:

```js
user.name = "Jane"; // Easy to modify from outside
console.log(user.email); // Easy to access from outside
```

JAVASCRIPT ONLY:

```js
function createUser(name, email) {
  // These variables are private (encapsulated)
  let userName = name;
  let userEmail = email;
  
  // Return an object with methods to interact with the private data
  return {
    getName: function() {
      return userName;
    },
    getEmail: function() {
      return userEmail;
    },
    setName: function(newName) {
      userName = newName;
    }
  };
}
const encapsulatedUser = createUser("John", "john@example.com");
```

Now, to interact with the data:

```js
console.log(encapsulatedUser.getName()); // "John"
encapsulatedUser.setName("Jane");
console.log(encapsulatedUser.getName()); // "Jane"

// Cannot directly access the data
console.log(encapsulatedUser.userName); // undefined
```

#### Better Solution:

Although the above solution works just fine, it's always keep creating more of the duplicate functions whenever an object is created by the method call, drastically increasing the usage of memory. The best approach would be to create a class that provides all of these methods, allowing all objects to have access to the same methods, other than having to create duplicates every time.

TypeScript: Uses the `private` keyword for encapsulation

```ts
class User {
  private userName: string;
  private userEmail: string;

  constructor(userName: string, userEmail: string) {
    this.userName = userName;
    this.userEmail = userEmail;
  };

  getName(): string { return this.userName; }
  getEmail(): string { return this.userEmail; }
  setName(newName: string): void { this.userName = newName; }
};

const myUser: User = new User("Brad", "BigBrad@example.com");

console.log(myUser.getName());  // "Brad"
console.log(myUser.getEmail()); // "BigBrad@example.com"
```

JavaScript: Uses the `#` hashtag symbol for private fields

```js
class User {
  // Use # for true private fields
  #userName;
  #userEmail;

  constructor(userName, userEmail) {
    this.#userName = userName;
    this.#userEmail = userEmail;
  }

  getName() { return this.#userName; }
  getEmail() { return this.#userEmail; }
  
  // Encapsulation allows controlling changes
  setName(newName) { 
    if (newName) {
      this.#userName = newName; 
    }
  }
}

const myUser = new User("Brad", "BigBrad@example.com");

console.log(myUser.getName());  // "Brad"
console.log(myUser.getEmail()); // "BigBrad@example.com"

// console.log(myUser.#userName); // SyntaxError: Private field '#userName' must be declared in an enclosing class
```

#### Example of Usage (JS ONLY):

createUser.js:

```js
export function createUser(username, age) {
  // Private data - cannot be accessed directly
  let privateUsername = username;
  let privateAge = age;
  
  // Public methods to interact with private data
  return {
    getUsername: function() {
      return privateUsername;
    },
  
    // Add the getAge() method that returns the correct age and the age info remains private
    getAge() { return privateAge; }
  };
}
```

main.js:

```js
import { createUser } from './createUser.js';

// Test code - don't modify
const user = createUser("john_doe", 25);
console.log(user.getUsername()); // Should output "john_doe"
console.log(user.getAge());      // Should output 25
```

##### Result:

```
john_doe
25
```