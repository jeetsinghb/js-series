const accountId = 13346;
let accountEmail = "johndoe@yahoo.com";
var accountPassword = "123JD78";
accountCity = "New York";
let accountState;

// accountId = 1556; // Not allowed - Cannot re-declare value to a const variable

console.log(accountId);

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// Extras

/*

In JavaScript, variable scope refers to where a variable is accessible within your code and for how long it retains its value. Here's a summary of variable scope in JavaScript:

1. Global Scope:
- Variables declared outside of any function or block have global scope.
- They are accessible from anywhere in your code, including inside functions.
- Global variables are accessible by any script or function on the page, which can lead to potential conflicts or unintended consequences if not managed carefully.

EXAMPLE:

var globalVariable = 10;

function myFunction() {
    console.log(globalVariable); // Accessible
}

2. Function Scope:
- Variables declared within a function have function scope.
- They are only accessible within the function in which they are defined.
- Variables declared with var keyword are function-scoped.

EXAMPLE:

function myFunction() {
    var localVar = 20;
    console.log(localVar); // Accessible
}

console.log(localVar); // Error: localVar is not defined

3. Block Scope (with let and const):
- Introduced in ECMAScript 6 (ES6).
- Variables declared with let or const are block-scoped, meaning they are only accessible within the block in which they are defined.
- Blocks include if statements, loops, and any code wrapped in curly braces {}.

EXAMPLE:

if (true) {
    let blockVar = 30;
    console.log(blockVar); // Accessible
}

console.log(blockVar); // Error: blockVar is not defined

4. Lexical Scope:
- Lexical scope means that the scope of a variable is determined by its position within the code.
- Inner functions have access to variables declared in their outer scope.
- This forms a chain of scopes called the "scope chain".

function outerFunction() {
    var outerVar = 40;

    function innerFunction() {
        console.log(outerVar); // Accessible
    }

    innerFunction();
}

outerFunction();


// FURTHERMORE

 What is the output for Block scope used via the var keyword?

 When var is used for variable declaration within a block in JavaScript, it doesn't strictly adhere to block scope like let or const. Instead, it has a behavior called "hoisting" and is scoped to the nearest function, not the block itself. Let's look at an example to understand this behavior:

 EXAMPLE:

 if (true) {
    var blockVar = 30;
    console.log(blockVar); // Output: 30
}

console.log(blockVar); // Output: 30


In this example, despite blockVar being declared within the if block, it is accessible outside of the block. This behavior is because variables declared with var are function-scoped or globally scoped, not block-scoped.

Here's what happens behind the scenes:

1. Variable declaration with var is hoisted to the top of the nearest enclosing function or global scope.
2. Even though blockVar is declared within the if block, it's effectively treated as if it were declared at the top of the function containing the if block.
3. Therefore, blockVar is accessible both inside and outside of the if block.

This behavior can sometimes lead to confusion and unintended consequences, especially if you expect block-scoping behavior similar to let or const. That's why, in modern JavaScript, it's generally recommended to use let or const for block-scoped variables to avoid such issues and to write more predictable and maintainable code.


What is the output for let and const in the function scope?

In JavaScript, let and const declarations behave differently from var declarations, particularly regarding their scope within functions.

1. let in Function Scope:

- When you declare a variable with let inside a function, it is block-scoped to that function.
- This means the variable is accessible only within the function in which it's defined and not outside of it.
- Each invocation of the function creates a new instance of the variable, scoped to that function call.

EXAMPLE:

function myFunction() {
    if (true) {
        let localVar = 20;
        console.log(localVar); // Accessible
    }
    console.log(localVar); // Error: localVar is not defined
}

In this example, localVar is only accessible within the if block and not outside of it, thanks to let providing block scope.

2. const in Function Scope:

- Similarly to let, when you declare a variable with const inside a function, it is block-scoped to that function.
- The difference with const is that it creates a constant whose value cannot be reassigned.
- Like let, each invocation of the function creates a new instance of the constant, scoped to that function call.

EXAMPLE:

function myFunction() {
    const PI = 3.14;
    console.log(PI); // Accessible

    // This would cause an error because you can't reassign a const
    // PI = 3.14159; // Error: Assignment to constant variable
}

In this example, PI is accessible within the function, but any attempt to reassign its value would result in an error.

In summary, let and const declarations within a function provide block scope, ensuring that variables are only accessible within the block in which they are defined, enhancing code clarity and predictability.


Is it the same as var??

In terms of function scope, the behavior of let and const is not the same as var in JavaScript.

While var is function-scoped, meaning variables declared with var are accessible throughout the entire function in which they are defined, let and const are block-scoped, meaning they are only accessible within the block in which they are defined, including within functions.

Here's a summary of the differences:

1. var in Function Scope:
- Variables declared with var are function-scoped.
- They are accessible throughout the entire function in which they are defined, regardless of the block in which they are declared.

 EXAMPLE:

 function myFunction() {
    if (true) {
        var localVar = 20;
    }
    console.log(localVar); // Accessible: localVar is hoisted to the function scope
}

2. let and const in Function Scope:
- Variables declared with let or const are block-scoped.
- They are only accessible within the block in which they are defined, including within functions.

EXAMPLE:

function myFunction() {
    if (true) {
        let localVar = 20;
    }
    console.log(localVar); // Error: localVar is not defined
}

So, while var variables are function-scoped, let and const variables are block-scoped, providing finer control over variable visibility and reducing the likelihood of unintended side effects.

*/
