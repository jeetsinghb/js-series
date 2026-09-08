/*

# The core topic is how JavaScript executes your code, Execution Context, the Memory/Execution phases, and the Call Stack. 

- The easiest way to understand this is to imagine JavaScript as a worker who receives your code, prepares everything, and then executes it one instruction at a time.

# JAVASCRIPT EXECUTION CONTEXT

1) Global Execution Context
2) Function Execution Context
3) Eval Execution Context

*/


/*

1. First: JavaScript is single-threaded

# The most important thing to understand:

- JavaScript is single-threaded.
- That means JavaScript has essentially one main thread of execution.

So if you write:

console.log("A");
console.log("B");
console.log("C");

JavaScript executes:

A
B
C

in order.

It doesn't normally execute all three at exactly the same time.

- Think of it like one person standing at a counter:

-> Task 1 → Task 2 → Task 3 → Task 4

- One task is handled at a time.

*/


/*

2. But who actually executes JavaScript?

- A JavaScript engine is responsible for actually executing it.

# For example:

- Chrome → V8 engine
- Node.js → V8 engine
- Firefox → SpiderMonkey
- Safari → JavaScriptCore

For the concepts in this video, you can imagine the JavaScript engine doing the work.

Very simplified:

Your JavaScript code
       ↓
JavaScript Engine
       ↓
Execution Context
       ↓
Call Stack
       ↓
Code executes

*/


/*

3. What happens when JavaScript starts your program?

Suppose you write:

let username = "Hitesh";

console.log(username);

You might think:

- "JavaScript simply reads line 1, then line 2."

- But internally, there is more happening.

-> JavaScript first creates something called a:

# Global Execution Context

- Whenever your JavaScript program starts, JavaScript creates a Global Execution Context (GEC).

You can imagine it as the main environment in which your program runs.

Global Execution Context
┌─────────────────────────┐
│ username                │
│ console                 │
│ other global things     │
│                         │
└─────────────────────────┘

And this global execution context gets placed into the Call Stack.

CALL STACK
┌─────────────────────────┐
│ Global Execution Context│
└─────────────────────────┘

*/


/*

4. Execution Context has two important phases

- When JavaScript creates an execution context, conceptually there are two major phases:

Execution Context
       │
       ├── 1. Memory Creation Phase
       │
       └── 2. Execution Phase

*/


/*

5. Phase 1 — Memory Creation Phase

Suppose we have:

let username = "Hitesh";
let age = 25;

function sayHello() {
    console.log("Hello");
}

- Before actually executing the code, JavaScript prepares memory for the variables/functions.

Conceptually:

username → undefined
age      → undefined
sayHello → function definition

- During this conceptual memory phase, username isn't immediately "Hitesh".

- It is initially prepared before the assignment is executed.

- For functions, JavaScript stores the function definition so that it can later execute it.

*/


/*

6. Phase 2 — Execution Phase

- Now JavaScript actually executes your code.

let username = "Hitesh";
let age = 25;

- the values are assigned:

username → "Hitesh"
age      → 25

- Then if you call:

sayHello();

- JavaScript needs to execute that function.

- And this is where the Call Stack becomes extremely important.

*/


/*

7. What is the Call Stack?

- Call Stack is a core mechanism that the JavaScript engine uses to keep track of function execution.
Because JavaScript is a single-threaded language, it can only execute one operation at a time,
and the Call Stack is the data structure that manages this step-by-step process.

(Which function is currently running and where JavaScript needs to return afterward.)

It follows:

# LIFO
Last In, First Out

Think of a stack of plates.

     ┌───────┐
     │ Plate3│ ← last added
     ├───────┤
     │ Plate2│
     ├───────┤
     │ Plate1│
     └───────┘

You remove the top plate first.

Same idea with the Call Stack.

*/


/*

8. Simple Call Stack example

Consider:

function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

one();
two();

When the program starts:

CALL STACK

┌──────────────────────┐
│ Global Execution     │
│ Context              │
└──────────────────────┘

Then JavaScript sees:

one();

So it creates an execution context for one().

CALL STACK

┌──────────────────────┐
│ one()                │
├──────────────────────┤
│ Global Execution     │
│ Context              │
└──────────────────────┘

one() executes: -> "One"

Then one() finishes.

It is removed from the stack:

CALL STACK

┌──────────────────────┐
│ Global Execution     │
│ Context              │
└──────────────────────┘

Then JavaScript sees:

two();

So:

CALL STACK

┌──────────────────────┐
│ two()                │
├──────────────────────┤
│ Global Execution     │
│ Context              │
└──────────────────────┘

two() executes.

Then it gets removed.

CALL STACK

┌──────────────────────┐
│ Global Execution     │
│ Context              │
└──────────────────────┘

That's the basic idea.

*/


/*

9. The really important example: function inside function

function one() {
    two();
    console.log("One");
}

function two() {
    console.log("Two");
}

one();

What happens?

# Step 1
Program starts:

CALL STACK

Global

# Step 2
one() is called:

CALL STACK

one()
Global

# Step 3
Inside one(), JavaScript sees:

two();

So two() is pushed onto the stack:

CALL STACK

two()
one()
Global

# Step 4
two() executes: -> "Two"

Then two() finishes and gets removed:

CALL STACK

one()
Global

# Step 5
JavaScript goes back to one().

Now:
console.log("One");

executes: -> One

Then one() finishes.

CALL STACK

Global

Finally the program finishes.

*/


/*

10. Visualizing the whole thing

This is the picture you should remember:

             JavaScript Program
                    │
                    ↓
        Global Execution Context
                    │
                    ↓
             Memory Phase
                    │
                    ↓
            Execution Phase
                    │
                    ↓
              Function Call
                    │
                    ↓
          New Execution Context
                    │
                    ↓
              Call Stack



And as functions call other functions:

                CALL STACK

                 ┌─────────┐
                 │  two()  │
                 ├─────────┤
                 │  one()  │
                 ├─────────┤
                 │ Global  │
                 └─────────┘

When two() finishes:

                 ┌─────────┐
                 │  one()  │
                 ├─────────┤
                 │ Global  │
                 └─────────┘

When one() finishes:

                 ┌─────────┐
                 │ Global  │
                 └─────────┘

*/


/*

11. What exactly is an Execution Context?

You can think of an Execution Context as:

- The environment in which JavaScript evaluates and executes a particular piece of code.

# Global Execution Context
- Created when your JavaScript program starts.

console.log("Hello");

runs inside the global execution context.

# Function Execution Context
- Every time you invoke a function, JavaScript creates an execution context for that function.

function add(a, b) {
    return a + b;
}

add(2, 3);

When add() runs, it gets its own execution context.

Conceptually:

add Execution Context
---------------------
a → 2
b → 3
result → 5

*/


/*

12. Let's trace a real example

Consider this:

let val1 = 10;
let val2 = 20;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result = addNum(val1, val2);

console.log(result);

# Step 1 — Global Execution Context

- JavaScript creates the global execution context.

- Then conceptually enters the memory phase.

val1   → undefined
val2   → undefined
addNum → function definition
result → undefined

# Step 2 — Execution Phase

Now:

val1 = 10;
val2 = 20;

So:

val1 → 10
val2 → 20

Then:

addNum(val1, val2);

means:

addNum(10, 20);

*/


/*

13. New execution context for addNum()

- JavaScript creates a new execution context:

addNum Execution Context
-------------------------
num1 → 10
num2 → 20
total → undefined

Then execution happens:

let total = num1 + num2;

So:

total → 30

Then:

return total;

returns:

30

The addNum() execution context is finished.

It is removed from the Call Stack.

Then:

result = 30;

Finally:

console.log(result);

prints:

30

*/


/*

14. The Call Stack in that example

At the beginning:

┌─────────────────┐
│ Global Context  │
└─────────────────┘

When addNum() is called:

┌─────────────────┐
│ addNum()        │
├─────────────────┤
│ Global Context  │
└─────────────────┘

When addNum() returns:

┌─────────────────┐
│ Global Context  │
└─────────────────┘

This push → execute → pop pattern is the heart of the Call Stack.

*/


/*

15. Push and Pop — remember these two words

If a function is called:

PUSH

onto the stack.

When it finishes:

POP

from the stack.

For example:

one();

means approximately:

PUSH one()
     ↓
execute one()
     ↓
POP one()

Nested functions:

one()
  ↓
two()
  ↓
three()

produce:

PUSH one()
PUSH two()
PUSH three()

three finishes
POP three()

two finishes
POP two()

one finishes
POP one()

*/


/*

16. What happens if functions keep calling functions?

Consider:

function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();

The stack becomes:

one()
two()
three()
Global

Then:

three() finishes

↓

two()
Global

Then:

two() finishes

↓

two() finishes

↓

one()
Global

Then:

one() finishes

↓

Global

That's exactly why it is called a stack.

*/


/*

17. What is Stack Overflow?

Now you'll understand a common JavaScript error:

- Maximum call stack size exceeded

Suppose:

function one() {
    one();
}

one();

- What's happening?

one() calls one().

That new one() calls another one().

And another...

one()
one()
one()
one()
one()
one()
...

The Call Stack keeps growing.

Eventually the engine says:

"I can't keep adding execution contexts."

*/


/*

18. Very important distinction: Call Stack vs Memory

You may have also heard:

- Stack and Heap.

Don't mix this with the Call Stack from this video.

They're related concepts but not the same thing.

# Call Stack
- Used to keep track of function execution.

Global
one()
two()

# Heap
- A memory area used by the JavaScript engine for dynamically allocated objects and other data

For example:

const user = {
    name: "Hitesh"
};

The object is stored in memory managed by the engine, conceptually associated with the heap.

So:

CALL STACK
     ↓
tracks execution

HEAP
     ↓
stores dynamically allocated data

- Don't think:

"Call Stack = all JavaScript memory."

That's incorrect.

*/


/*

19. One important correction about let, const, and var

Memory Phase
↓
variables → undefined

- But be careful when applying that literally to modern JavaScript.

- let and const behave differently from var because of the Temporal Dead Zone (TDZ).

For example:

console.log(name);

let name = "Hitesh";

This does not print:

undefined

- It throws an error because name is in its TDZ before initialization.

*/


/*

20. Where does asynchronous JavaScript fit?

This is mainly about execution + Call Stack.

Later, when you study asynchronous JavaScript, you'll encounter:

Call Stack
     ↓
Web APIs / runtime APIs
     ↓
Callback Queue
     ↓
Event Loop
     ↓
Call Stack

For example:

console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");

Output:

A
C
B

Why?

Because setTimeout() doesn't simply block the JavaScript thread for 2 seconds.

The browser/runtime handles the timer, and the callback gets scheduled to run later when the Call Stack is available.

*/


/*

21. The entire concept in one diagram

                   JAVASCRIPT CODE
                         │
                         ↓
              GLOBAL EXECUTION CONTEXT
                         │
              ┌──────────┴──────────┐
              ↓                     ↓
        MEMORY PHASE          EXECUTION PHASE
              │                     │
              │                     ↓
              │              function call
              │                     │
              │                     ↓
              │          FUNCTION EXECUTION
              │              CONTEXT
              │                     │
              └─────────────────────┤
                                    ↓
                              CALL STACK
                                    │
                         ┌──────────┴──────────┐
                         │                     │
                       PUSH                   POP
                         │                     │
                         ↓                     ↓
                    function starts      function ends

*/


/*

22. The mental model I want you to keep

Whenever you see JavaScript code, mentally ask:

# Question 1

What is the program doing first?
- Global Execution Context is created.

# Question 2

What happens during preparation?
- Memory is set up.

# Question 3

What happens during execution?
- Statements are executed and values are assigned.

# Question 4

Is a function being called?
- Create a function execution context and put it on the Call Stack.

# Question 5

Does that function call another function?
- Push another execution context.

# Question 6

Does a function finish?
- Pop it from the Call Stack.

*/


/*

23. Super-short version

JavaScript is single-threaded, so it executes one piece of JavaScript at a time. When a program starts, a Global Execution Context is created.
During its creation, JavaScript conceptually goes through a memory creation phase and an execution phase.
When a function is called, a new Function Execution Context is created and pushed onto the Call Stack.
The function executes, and when it finishes, its execution context is popped from the stack.
The Call Stack follows LIFO — Last In, First Out. If functions keep getting added without returning, the stack can overflow and produce a "Maximum call stack size exceeded" error.

*/


/*

One final example to test yourself

Try to predict the Call Stack for this:

function first() {
    console.log("First");

    second();

    console.log("First again");
}

function second() {
    console.log("Second");

    third();
}

function third() {
    console.log("Third");
}

first();


The stack progression is:

Global
   ↓
first()
   ↓
second()
   ↓
third()


Then it unwinds:

third()  ← POP
   ↓
second() ← POP
   ↓
first()  ← POP
   ↓
Global


And the output is:

First
Second
Third
First again

*/

// FINAL NOTE:

/*

If you remember only 5 things from this video

1. JavaScript starts with a Global Execution Context.

2. An execution context has a memory/preparation phase and an execution phase (a useful conceptual model).

3. Every time you call a function, JavaScript creates a Function Execution Context.

4. That context is pushed onto the Call Stack, and when the function finishes, it is popped.

5. The Call Stack is LIFO — Last In, First Out.

*/