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

Choosing this approach, you will be able to reutilize your code anytime you crate objects of that particular blueprint and reuse the same methods any time, saving lots of memory throughout the program!

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

### Public & Private Class Fields:

In JavaScript classes, we can define two types of class fields: **public and private**, however, TypeScript introduces the `protected` field for encapsulation, allowing classes that inherit from the same class to also have access to the same fields and attributes!

#### Basic Syntax:

Here are both approaches that you can use when applying encapsulation to your attributes on the go.

##### Public Fields:

Create a class with public fields:

TypeScript:

```ts
class Student {
  public name: string;
  public grade: number;

  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
}
```

JavaScript:

```js
class Student {
  // Assigning properties in JavaScript with empty values are optional, for readability!
  name = '';
  grade = 0;
  
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}
```

Create a student instance:

```js
const student = new Student('Alice', 95);

// Access public fields from outside the class:
console.log(student.name); // Output: "Alice"
student.grade = 98;
console.log(student.grade); // Output: 98
```

##### Private Fields:

**Private fields** are denoted with the `#` symbol (JS) or with the `private` keyword (TS) and can only be accessed from within the class, so classes that inherit from the parent class will not have access to these private attributes:

TypeScript:

```ts
class Student {
  public name: string;
  private grade: number;
  
  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
  
  getGrade(): number {
    return this.grade;
  }
  
  updateGrade(newGrade: number): void {
    this.grade = newGrade;
  }
}
```

JavaScript:

```js
class Student {
  name = '';
  #grade = 0;
  
  constructor(name, grade) {
    this.name = name;
    this.#grade = grade;
  }
  
  getGrade() {
    return this.#grade;
  }
  
  updateGrade(newGrade) {
    this.#grade = newGrade;
  }
}
```

Using private fields:

```js
const student = new Student('Bob', 87);
console.log(student.name); // Output: "Bob"

// Access private field using a method
console.log(student.getGrade()); // Output: 87

// Update private field using a method
student.updateGrade(92);
console.log(student.getGrade()); // Output: 92

// This would cause an error:
// console.log(student.#grade); // SyntaxError
```

If you try to call the private instance attributes directly from your object, the program would raise a syntax error, causing your program to crash. So making sure that your classes provide getter or setter methods would help with retrieving these encapsulated data.

#### Example of Usage (JS ONLY):

UserAccount.js:

```js
export class UserAccount {
  // Add a public field username
  username = "";
  // Add a private field #password
  #password = 0;
  // Add a constructor that takes username and password parameters and sets them as properties
  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }
}
```

main.js:

```js
import { UserAccount } from './userAccount.js';

// Test code:
const user = new UserAccount("alice", "secret123");
console.log(user.username);          // Should output "alice"
```

##### Result:

```
alice
```

### Private Methods:

Private methods in JavaScript classes allow you to hide implementation detais and prevent external access to internal functionality:

Starting in ES2022, private methods can be defined using the `#` prefix, whereas in TypeScript, you use the `private` keyword.

#### Basic Syntax:

TypeScript:

```ts
class Counter {
  private count: number = 0;
  
  // Create a private method
  private increment(): void {
    this.count++;
  }
  
  // Public method that uses the private method
  addOne(): number {
    this.increment();
    return this.count;
  }
}

const myCounter = new Counter();

console.log(myCounter.addOne());  // 1
```

JavaScript:

```js
class Counter {
  #count = 0;
  
  // Create a private method
  #increment() {
    this.#count++;
  }
  
  // Public method that uses the private method
  addOne() {
    this.#increment();
    return this.#count;
  }
}

// Creating the counter instance
const myCounter = new Counter();

// Using the public method
console.log(myCounter.addOne());  // 1

// But trying to access the private method directly will cause an error:
myCounter.#increment(); // Error: Private method is not accessible outside class
```

Private methods help maintain encapsulation by keeping internal implementation details hidden from the outside world.

#### Example of Usage:

messageBox.js:

TypeScript:

```ts
export class MessageBox {
  private message: string = "";
  
  setMessage(text: string): string {
    if (this.isValidMessage(text)) {
      this.message = text;
      return "Message set!";
    }
    return "Invalid message!";
  }
  
  getMessage(): string {
    return this.message;
  }
  
  // Add a private method called #isValidMessage(text)
  private isValidMessage(text: string): boolean {
    if (text.length === 0 || text.length >= 100) return false;

    // Make it return true if the text is not empty and less than 100 characters, otherwise return false
    return true;
  }
}
```

JavaScript:

```js
export class MessageBox {
  #message = "";
  
  setMessage(text) {
    if (this.#isValidMessage(text)) {
      this.#message = text;
      return "Message set!";
    }
    return "Invalid message!";
  }
  
  getMessage() {
    return this.#message;
  }
  
  // Add a private method called #isValidMessage(text)
  #isValidMessage(text) {
    if (text.length === 0 || text.length >= 100) return false;
    
    // Make it return true if the text is not empty and less than 100 characters, otherwise return false
    return true;
  }
}
```

main.js:

```js
import { MessageBox } from './messageBox.js';

// Using the message box
const box = new MessageBox();

console.log(box.setMessage("Hello"));    // "Message set!" (uses #isValidMessage)
console.log(box.setMessage(""));         // "Invalid message!" (uses #isValidMessage)
```

##### Result:

```
Message set!
Invalid message!
```

## Inheritance & The 'extends' Key:

### Inheritance:

In object oriented programming, inheritance in JavaScript gives any class the access to gain all of the public properties and methods from another class.

#### Basic Syntax:

Here is an example of a parent class called `Vehicle`:

TypeScript:

```ts
class Vehicle {
 public brand: string;
 public model: string;
 constructor(brand: string, model: string) {
   this.brand = brand;
   this.model = model;
 }
 drive(): void {
   console.log("Driving!");
 }
}
```

JavaScript:

```js
class Vehicle {
 constructor(brand, model) {
   this.brand = brand;
   this.model = model;
 }
 drive() {
   console.log("Driving!");
 }
}
```

Now, we build a child class called `Car` that will inherit from the `Vehicle` class.

TypeScript:

```ts
// Car inherits from Vehicle
class Car extends Vehicle {
 honk(): void {
   console.log("Beep beep!");
 }
}
```

JavaScript:

```js
// Car inherits from Vehicle
class Car extends Vehicle {
 honk() {
   console.log("Beep beep!");
 }
}
```

When we create an instance of the `Car` class, this object will automatically have access to public methods and attributes that the `Vehicle` class has to offer:

```js
const myCar = new Car("Toyota", "Camry");
console.log(myCar.brand);  // "Toyota" - inherited from Vehicle
console.log(myCar.model);  // "Camry" - inherited from Vehicle
// Car can access Vehicle's methods
myCar.drive();  // "Driving!" - inherited from Vehicle
// Car also has its own methods
myCar.honk();   // "Beep beep!" - specific to Car
```

#### Example of Usage (JS ONLY):

animal.js:

```js
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export class Dog extends Animal {
  // Dog inherits from Animal
}
```

main.js:

```js
import { Dog } from './animal.js';

// Create myDog object with name "Buddy" and age 3.
const myDog = new Dog("Buddy", 3);

console.log(myDog.name);  // Should output "Buddy"
console.log(myDog.age);  // Should output 3
```

##### Result:

```
Buddy
3
```

### The "is-a" Relationship:

The "is-a" relationship is an affirmation that is easy to comprehend when determining inheritance to make more sense. For a brief example, you say that **"A is a B"** and it sounds correct, then A should inherit from B.

#### Correct Terminology:

##### Correct (User Inheritance):

* "A dog **is an** Animal" -> `class Dog extends Animal`
* "A Car is a Vehicle" -> `class Car Extends Vehicle`
* "A Textbook is a Book" -> `class Textbook extends Book`

##### Incorrect (Don't use Inheritance):

* "A Driver is a Car" -> No, a driver uses a car
* "A Wheel is a Car" -> No, a wheel is part of a car
* "A Student is a Classroom" -> No, a student is in a classroom

#### Basic Syntax (JS ONLY):

For example, let's consider tow objects:

```js
// Base class - what they all ARE
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  
  read() {
    console.log(`Reading ${this.title} by ${this.author}`);
  }
}

// A Novel IS-A Book (correct inheritance)
class Novel extends Book {
  constructor(title, author, pages, genre) {
    super(title, author, pages);
    this.genre = genre;
  }
}

// Using the classes
const fiction = new Novel("1984", "George Orwell", 328, "Dystopian");
fiction.read();    // "Reading 1984 by George Orwell" - inherited from Book
```

When you make inheritance, it is key to call the `super()` method to export necessary values to external classes from other modules that require other values to be passed onto their instance attributes. But we will cover the `super()` method later on.

### The 'extends' Keyword:

The `extends` keyword in JavaScript (similar to Java) is used to **initialize a child class that inherits from a distinct class** to create and have access to *properties and methods from a parent class*.

#### Basic Syntax:

Let's firsts create a parent class called `Animal`:

TypeScript:

```ts
class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  
  speak(): string {
    return `${this.name} makes a noise.`;
  }
}
```

JavaScript:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a noise.`;
  }
}
```

Now, build a child class that will extend from the parent class. This class should be called `Dog`:

```js
class Dog extends Animal {
  // The Dog class inherits from Animal
}
```

This brief demonstration indicates that the `Dog` class is now inheriting to all properties and methods from the `Animal` class.

```js
// Create a dog instance:
const dog = new Dog('Rex');

// Call a method inherited from the parent:
console.log(dog.speak()); // Outputs: "Rex makes a noise."
```

The `extends` keyword is fundamental for creating bonds and relationships with inheritance where the child class (`Dog`) can access and use all functionality defined in the parent class (`Animal`).

### The 'super()' Method:

The `super()` method in JavaScript calls any methods or constructors from an external class or module and performs the necessary tasks that have been called for. But in a constructor method, it'll pass the values to create and initialize and instance attribute from that external class. Note that it **must be called before you can add any properties to the child class!**

You can think of it in a way that the parent class builds the foundation of the object, and the `super()` would prompt the program to "build that foundation first" before the child class add its own features.

#### Basic Syntax:

TypeScript:

```ts
// Parent class:
class Employee {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Child class:
class Manager extends Employee {
  public department: string;
  constructor(name: string, department: string) {
    super(name); // Call the parent constructor with name
    this.department = department;
  }
}

// Create an instance of the child class:
const myManager = new Manager("Sarah", "Engineering");
console.log(myManager.name);      // "Sarah"
console.log(myManager.department); // "Engineering"
```

JavaScript:

```js
// Parent class:
class Employee {
  constructor(name) {
    this.name = name;
  }
}

// Child class:
class Manager extends Employee {
  constructor(name, department) {
    super(name); // Call the parent constructor with name
    this.department = department;
  }
}

// Create an instance of the child class:
const myManager = new Manager("Sarah", "Engineering");
console.log(myManager.name);      // "Sarah"
console.log(myManager.department); // "Engineering"
```

##### Breakdown:

- `constructor(name, department)`: The `Manager` class will need both name and department values.
- `super(name)`: Passes `name` to `Employee`'s constructor.
- `this.department`: Sets the `Manager`'s unique property.

This entire program should create an `Manager` object that has both inherited properties (`name`) and its own property (`department`).

##### Summary:

The `super()` method must be called before using `this` in the constructor of a derived class. If you don't call `super()`, JavaScript will throw a reference error.

#### Example of Usage (JS ONLY):

meals.js:

```js
export class Meal {
  constructor(name) {
    this.name = name;
  }
}

export class Salad extends Meal {
  constructor(name, ingredients) {
    // super() calls the parent constructor method
    super(name);
    
    // Set ingredients property to the child class
    this.ingredients = ingredients;
  }
}
```

main.js:

```js
import { Meal } from './meals.js';
import { Salad } from './meals.js';

const salad = new Salad("Caesar", ["lettuce", "croutons", "cheese"]);
console.log(salad.name);       // Should output "Caesar"
console.log(salad.ingredients); // Should output ["lettuce", "croutons", "cheese"]
```

##### Result:

```
Caesar
[ "lettuce", "croutons", "cheese" ]
```

### Inheriting Properties & Methods:

When a class extends another class, it inherits all the properties and methods from the parent class, meaning that the child classes automatically have access to everything defined in the parent class.

#### Basic Syntax:

TypeScript:

```ts
class Animal {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  eat(): string {
    return `${this.name} is eating`;
  }
  
  sleep(): string {
    return `${this.name} is sleeping`;
  }
}

class Dog extends Animal {
  public breed: string;
  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }
}
```

JavaScript:

```js
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  eat() {
    return `${this.name} is eating`;
  }
  
  sleep() {
    return `${this.name} is sleeping`;
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
}
```

When you create an instance of the class `Dog`, when we use the `eat()` and `sleep()` methods from the parent class, the program would still run, even though the methods are not in the child class.

```js
const rex = new Dog("Rex", 3, "German Shepherd");

// Calling all methods
console.log(rex.eat());  // Outputs: Rex is eating
console.log(rex.sleep()); // Outputs: Rex is sleeping

// Accessing All Properties:
console.log(rex.name);  // Outputs: Rex
console.log(rex.age);   // Outputs: 3
console.log(rex.breed); // Outputs: German Shepherd
```

#### Example of Usage (JS ONLY):

desserts.js:

```js
export class Dessert {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
  }
  
  describe() {
    return `${this.name} has ${this.calories} calories`;
  }
}

export class Cake extends Dessert {
  constructor(name, calories, flavor) {
    super(name, calories);
    this.flavor = flavor;
  }
  addCandles() { return `Added candles to ${this.name}!`; };
}
```

main.js:

```js
import { Dessert } from './desserts.js';
import { Cake } from './desserts.js';

const myCake = new Cake("Birthday Cake", 300, "Chocolate");
console.log(myCake.describe());   // Should output "Birthday Cake has 300 calories"
console.log(myCake.flavor);       // Should output "Chocolate"
console.log(myCake.addCandles()); // Should output "Added candles to Birthday Cake!"
```

##### Result:

```
Birthday Cake has 300 calories
Chocolate
Added candles to Birthday Cake!
```


## Organizing OOP Code:

### Organize Classes into Modules:

The best thing you can do to organize all of your modules and classes is to keep them in specific repositories/folders, where then, you would already know how to localize these class modules in the first place!

#### Basic Syntax:

When storing your class files, keep them inside the `src` folder as shown below:

```text
my-project/
└── src/
    ├── models/         ← classes folder
    │   └── User.js
    ├── services/
    │   └── AuthService.js
    └── utils/
        └── helpers.js
```

##### Why 'src'?

* Clearly separates **code you write** from **config files, build outputs, or tests**
* Industry standard — Other developers will understand immediately
* Works with bundlers (Webpack, Vite) and compilers (TypeScript, Babel) that often expect `src/` -> `dist/` or `build/`

#### Project Type Structure:

|          **Project Type**          |      **Typical Folder**      |               Examples                |
| :--------------------------------: | :--------------------------: | :-----------------------------------: |
|     Small Script (1 - 3 files)     |          Root Folder         |         `index.js`, `user.js`         |
|     Library / app source code      |            `src/`            |             `src/User.js`             |
|         Backend (Node.js)          |       `src/` or `lib/`       |          `src/controllers/`           |
|       Frontend (React, Vue)        |            `src/`            |          `src/components/`            |
|   Compiled Language (TS -> JS)     |      `src/` -> `dist/`       |   `src/index.ts` -> `dist/index.js`   |

#### How to Organize Folders & Files — General Principles:

##### Group By Feature or Type (larger apps):

```text
src/
├── auth/
│   ├── AuthService.js
│   ├── AuthController.js
│   └── UserModel.js
├── payment/
│   ├── PaymentService.js
│   └── CreditCardValidator.js
```

##### Keeping a Consistent Top-Level Structure:

```text
my-project/
├── src/                  # all source code
│   ├── index.js          # entry point
│   ├── components/       # UI components (React/Vue)
│   ├── models/           # JS classes (data structures)
│   ├── services/         # API calls, business logic
│   ├── utils/            # reusable helpers
│   ├── config/           # configuration files
│   └── tests/            # unit tests (or keep separate at root)
├── dist/ or build/       # compiled output (auto-generated)
├── node_modules/
├── .env                  # environment variables
├── .gitignore
├── package.json
└── README.md
```

###### Storing JavaScript Class files:

If you have multiple classes:

```text
src/
├── models/
│   ├── User.js
│   ├── Product.js
│   └── ShoppingCart.js
```

Or if each class has **associated logic** (e.g., User + UserService + UserValidator):

```text
src/
├── user/
│   ├── User.js           # class definition
│   ├── UserService.js    # CRUD operations
│   └── userUtils.js
├── product/
│   └── Product.js
```

#### What NOT to do:

❌ Dumping all `.js` files in the root (except tiny scripts)
❌ `src/` -> `classes/` -> `user/` -> `models/` -> `User.js` (too deep)
❌ Mixing source code with config files:

```text
src/
  index.js
  package.json  ← wrong, belongs at root
  webpack.config.js  ← wrong
```

#### Summary:

Here is a simple template that you can follow today to help you to keep all of your files and source code organized in the future!

```text
project-root/
├── src/                      ← your code goes here
│   ├── index.ts or .js       ← main entry
│   ├── models/               ← class files
│   ├── utils/                ← helpers
│   └── config/               ← Configure files (app configuration such as logic or settings)
├── dist/
|   └── index.js
├── tests/             (or inside src/tests)
├── .gitignore
├── package.json
├── tsconfig.json             ← tool config
└── README.md
```

## Static Methods & Properties:

### Class-Level Vs. Instance-Level:

In JavaScript classes, there are two distinct levels of properties and methods:

1. **Instance-Level**: Properties and methods that belong to each individual object created from the class.
2. **Class-Level**: Properties and methods that belong to the class itself, not to instances.

#### Basic Syntax (JS ONLY):

##### Instance-Level Members:

```js
class Car {
  constructor(make) {
    this.make = make;
  }
  
  drive() {
    return `The ${this.make} is driving`;
  }
}

// Create an object from the 'Car' class
const myCar = new Car("Toyota");
console.log(myCar.drive()); // Outputs: "The Toyota is driving"
```

Each and every instance gets its own copy of the `drive()` method, being able to access its own properties using the `this` keyword.

##### Class-Level Members:

```js
class Car {
  constructor(make) {
    this.make = make;
  }
  
  drive() {
    return `The ${this.make} is driving`;
  }
  
  static compareModels(car1, car2) {
    return `Comparing ${car1.make} with ${car2.make}`;
  }
}

const car1 = new Car("Toyota");
const car2 = new Car("Honda");

console.log(Car.compareModels(car1, car2)); // Outputs: "Comparing Toyota with Honda"

// Trying to call a static method on an instance will raise an error:
car1.compareModels(car1, car2); // Error: car1.compareModels is not a function
```

For this example, the `compareModels()` is indeed a **static method**, or in other words, an **utility method**. We primarily use the `static` keyword in front of the method name to create a method that belongs to the class itself, not to the instance. However, instances cannot call this method, resulting in an error.

#### Example of Usage:

calculator.js:

TypeScript:

```ts
export class Calculator {
  public value: number;
  constructor(initialValue: number) {
    this.value = initialValue;
  }
  
  add(number: number): number {
    this.value += number;
    return this.value;
  }
  static multiply(num1: number, num2: number): number {
    return num1 * num2;
  // Do NOT use this (static methods don't have instance data)
  }
}
```

JavaScript:

```js
export class Calculator {
  constructor(initialValue) {
    this.value = initialValue;
  }
  
  add(number) {
    this.value += number;
    return this.value;
  }
  static multiply(num1, num2) {
    return num1 * num2;
  // Do NOT use this (static methods don't have instance data)
  }
}
```

main.js:

```js
import { Calculator } from './calculator.js';


const calc = new Calculator(5);             // Creates calculator with value = 5
const result1 = calc.add(3);                // Should add 3 → 5 + 3 = 8
const result2 = Calculator.multiply(4, 6);  // Should multiply 4 × 6 = 24
console.log(result1);                       // Expected: 8
console.log(result2);                       // Expected: 24
```

##### Result:

```
8
24
```

### Static Properties:

Static properties are **public properties or class attributes that belong to the class itself**, not to instances of the class. They are shared among all instances.

#### Basic Syntax (JS ONLY):

```js
class Counter {
  // Define a static property
  static count = 0;
  
  constructor() {
    // Increment the static count each time a new instance is created
    Counter.count++;
  }
}
```

Then you would access the static property using the class name:

```js
console.log(Counter.count); // 0

// Create some instances
const counter1 = new Counter();
const counter2 = new Counter();

console.log(Counter.count); // 2
```

#### Why use Static Properties?

Static properties are useful for values that should be shared across all instances or for class-level constants.

```js
class MathConstants {
  static GOLDEN_RATIO = 1.61803;
}

console.log(MathConstants.PI); // 3.14159
```

#### Example of Usage (JS ONLY):

constants.js:

```js
class MathConstants {
  static GOLDEN_RATIO = 1.61803;
}

console.log(MathConstants.PI); // 3.14159
```

main.js:

```js
import { MathConstants } from './constants.js';

console.log(MathConstants.PI);        // Should output 3.14159
console.log(MathConstants.E);         // Should output 2.71828
```

##### Result:

```
3.14159
2.71828
```
