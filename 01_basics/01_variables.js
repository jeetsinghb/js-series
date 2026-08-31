const accountId = 13346;
let accountEmail = "johndoe@yahoo.com";
var accountPassword = "123JD78";
accountCity = "New York";
let accountState;

// accountId = 1556; // TypeError: Assignment to constant variable.

// const accountId = 1556; // SyntaxError: Identifier 'accountId' has already been declared

/*

So remember:

Reassignment → changing the value
Redeclaration → declaring the variable again

*/

console.log(accountId);

/*
Prefer not to use var
because of issues in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
========================================
JAVASCRIPT SCOPE
========================================

1. var
----------------------------------------

var is function-scoped, NOT block-scoped.

Example:

if (true) {
    var x = 10;
}

console.log(x); // 10

The 'if' block does not create a separate scope for 'var'.

If 'var' is declared inside a function, it is scoped
to that function:

function test() {
    if (true) {
        var x = 10;
    }

    console.log(x); // 10
}

test();

But x is not accessible outside the function.

----------------------------------------

2. let and const
----------------------------------------

let and const are block-scoped.

Example:

if (true) {
    let x = 10;
    const y = 20;
}

console.log(x); // ReferenceError
console.log(y); // ReferenceError

Blocks include:

if (...) { }
for (...) { }
while (...) { }
{ }

A function body is also a block.

----------------------------------------

3. Global / Top-Level Scope
----------------------------------------

Code written at the top level is in the top-level scope.

In a traditional browser script, top-level declarations
can be associated with the global environment.

However, JavaScript modules have their own top-level scope,
so top-level does not always mean global.

----------------------------------------

4. Lexical Scope
----------------------------------------

Lexical scope means scope is determined by where code
is written.

Example:

function outer() {
    let x = 10;

    function inner() {
        console.log(x); // 10
    }

    inner();
}

inner() can access x because x is in its outer lexical scope.

----------------------------------------

5. Hoisting
----------------------------------------

Hoisting is separate from scope.

'var' declarations are hoisted and initialized with
'undefined'.

Example:

console.log(x); // undefined
var x = 10;

Conceptually:

var x;
console.log(x);
x = 10;

Do NOT think that hoisting is why var escapes an if block.

'var' escapes the block because `var` is not block-scoped.

----------------------------------------

6. let/const and the Temporal Dead Zone
----------------------------------------

let and const declarations are also processed before
execution, but they cannot be accessed before their
declaration is reached.

Example:

console.log(x); // ReferenceError
let x = 10;

The period before the declaration is reached is called
the Temporal Dead Zone (TDZ).

----------------------------------------

7. const
----------------------------------------

const prevents reassignment of the variable.

const x = 10;

x = 20; // TypeError

But const does NOT make objects or arrays immutable.

const user = {
    name: "John"
};

user.name = "Mike"; // Allowed

user = {}; // Not allowed
*/


/*

Keyword	   Scope	   Reassign?
var	       Function	   ✅ Yes
let	       Block	   ✅ Yes
const	   Block	   ❌ No

Scope = Where can I access this variable?

Hoisting = What happens to the declaration before execution?

*/



