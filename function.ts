// Return Type
// The type of the value returned by the function can be explicitly defined.

// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
  }
  
  console.log(getTime());

//If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

// void type: it represents it doesn't return anything
/*
function printHello(): void {
    console.log('Hello!');
  }
  
  printHello();
  */

//   Parameters
// Function parameters are typed with a similar syntax as variable declarations.
/*
function multiply(a: number, b: number) {
    return a * b;
  }
  
  console.log(multiply(2,5))
  */
// default parameter
/*
  function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet();          // Output: "Hello, Guest"
greet("Surabhi"); // Output: "Hello, Surabhi"
greet(42);        // TypeScript error if strict mode is on
*/

//Type alias
/*
type Name = string | number;

function greet(name: Name) {
    console.log("Hello, " + name);
}

greet("Surabhi"); // No error, 'name' is a string
greet(42);        // No error, 'name' is a number
greet(true);      // TypeScript error, 'name' cannot be a boolean
*/

//OPTIONAL PARAMETER

// the `?` operator here marks parameter `c` as optional

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }
  
  console.log(add(2,5))


//Type alias:
// Type aliases are particularly helpful for union types, where a value can be one of several types.
/*
type ID = string | number;

let userID: ID;

userID = "12345";  // Valid, userID is a string
userID = 67890;    // Valid, userID is a number
userID = true;     // Error, userID cannot be a boolean
*/
