---
title: Variables & Data Types in JavaScript
description: Learn about JavaScript variables (var, let, const) and data types (primitives and objects). Understand scope, hoisting, and type coercion.
---

# Variables & Data Types

Understanding variables and data types is fundamental to JavaScript programming. Let's explore how to declare variables and work with different types of data.

## Variable Declarations

JavaScript provides three ways to declare variables:

### `let` - Block Scoped
```javascript
let name = "Alice";
let age = 25;

if (true) {
  let name = "Bob"; // Different variable
  console.log(name); // "Bob"
}

console.log(name); // "Alice"
```

### `const` - Immutable Reference
```javascript
const PI = 3.14159;
const user = { name: "Alice", age: 25 };

// PI = 3.14; // Error: Cannot reassign
user.age = 26; // OK: Object properties can be modified
```

### `var` - Function Scoped (Legacy)
```javascript
var message = "Hello";

function example() {
  var message = "Hi"; // Function scoped
  console.log(message); // "Hi"
}

console.log(message); // "Hello"
```

## Primitive Data Types

JavaScript has seven primitive data types:

### String
```javascript
const firstName = "John";
const lastName = 'Doe';
const fullName = `${firstName} ${lastName}`; // Template literal

// String methods
console.log(fullName.length); // 8
console.log(fullName.toUpperCase()); // "JOHN DOE"
console.log(fullName.includes("John")); // true
```

### Number
```javascript
const integer = 42;
const decimal = 3.14;
const negative = -10;
const infinity = Infinity;
const notANumber = NaN;

// Number methods
console.log(Number.isInteger(42)); // true
console.log(parseFloat("3.14")); // 3.14
console.log(Math.round(3.7)); // 4
```

### Boolean
```javascript
const isActive = true;
const isComplete = false;

// Truthy and falsy values
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
```

### Undefined
```javascript
let uninitialized;
console.log(uninitialized); // undefined

function noReturn() {
  // No return statement
}
console.log(noReturn()); // undefined
```

### Null
```javascript
let data = null; // Intentional absence of value
console.log(data); // null
console.log(typeof null); // "object" (known quirk)
```

### Symbol
```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false (always unique)

// Use case: Object property keys
const user = {
  [id1]: "user123",
  name: "Alice"
};
```

### BigInt
```javascript
const bigNumber = 1234567890123456789012345678901234567890n;
const anotherBig = BigInt("9007199254740991");

console.log(bigNumber + anotherBig); // BigInt arithmetic
```

## Object Types

### Objects
```javascript
const person = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "coding"],
  address: {
    city: "New York",
    country: "USA"
  }
};

// Accessing properties
console.log(person.name); // "Alice"
console.log(person["age"]); // 30
console.log(person.address.city); // "New York"
```

### Arrays
```javascript
const fruits = ["apple", "banana", "orange"];
const mixed = [1, "hello", true, null];

// Array methods
fruits.push("grape"); // Add to end
fruits.unshift("mango"); // Add to beginning
const lastFruit = fruits.pop(); // Remove from end

console.log(fruits.length); // 4
console.log(fruits.includes("apple")); // true
```

### Functions
```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

console.log(typeof greet); // "function"
```

## Type Checking

### `typeof` Operator
```javascript
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (quirk)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function() {}); // "function"
```

### More Precise Type Checking
```javascript
// Check for arrays
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// Check for null
const isNull = value => value === null;

// Check for objects (excluding null and arrays)
const isObject = value => 
  typeof value === "object" && 
  value !== null && 
  !Array.isArray(value);
```

## Type Coercion

JavaScript automatically converts types in certain situations:

### Implicit Coercion
```javascript
console.log("5" + 3); // "53" (string concatenation)
console.log("5" - 3); // 2 (numeric subtraction)
console.log("5" * "2"); // 10 (numeric multiplication)
console.log(true + 1); // 2 (boolean to number)
```

### Explicit Conversion
```javascript
// To string
console.log(String(123)); // "123"
console.log((123).toString()); // "123"

// To number
console.log(Number("123")); // 123
console.log(parseInt("123px")); // 123
console.log(parseFloat("3.14")); // 3.14

// To boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(!!"hello"); // true (double negation)
```

## Best Practices

1. **Use `const` by default**, `let` when reassignment is needed
2. **Avoid `var`** in modern JavaScript
3. **Use descriptive variable names**
4. **Be explicit about type conversions**
5. **Use strict equality (`===`) instead of loose equality (`==`)**

```javascript
// Good practices
const MAX_USERS = 100;
let currentUserCount = 0;

const user = {
  id: generateId(),
  name: sanitizeInput(userInput),
  createdAt: new Date()
};

// Explicit comparison
if (user.id === expectedId) {
  // Handle match
}
```

## Next Steps

Now that you understand variables and data types, let's explore [Functions](/javascript/functions) to learn how to organize and reuse your code effectively.