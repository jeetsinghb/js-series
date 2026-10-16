// 1. Object literals

const user = {
    username: "developer",
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function () {
        console.log('More user details');

        // console.log(`username: ${username}`); ❌
        // get current function context ✅
        console.log(`username: ${this.username}`);

        console.log(this);
        /*
        {
        username: 'developer',
        loginCount: 8,
        isLoggedIn: true,
        getUserDetails: [Function: getUserDetails]
        }
        */
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); -> Global context (browser) -> window object


// 2. new AND Constructor function

function User(username, loginCount, isLoggedIn) {
    // variable     // data which is passed down
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this // implicitly defined by default, do need to define explicitly
}

// const userOne = User('hitesh', '4', true) ❌
// const userTwo = User('dominuc', 2, false) ❌
// console.log(userOne);

const userOne = new User('developer', 4, true);

const userTwo = new User('jeet', 2, false)

console.log(userOne);

console.log(userTwo);

console.log('----------');

userOne.greeting()

userTwo.greeting()

console.log('----------');

console.log(userOne.constructor); // reference of the current function [User]

console.log(userOne instanceof User);

console.log(userTwo instanceof User);

// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

// LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof


// const promiseOne = new Promise();
// const date = new Date();

// "new" keyword is a built-in language operator that is used to invoke (call) a constructor function or a class.

/**
 * The Key Difference:
 * - The new keyword: An operator that triggers a special multi-step object creation process.
 * - A constructor function: A regular JavaScript function (or class) intended to serve as a blueprint for creating objects.
 * - eg: When you write const user = new User(), new is the operator and User is the constructor function.
 * 
 * What new Actually Does Behind the Scenes
 * - When you place new before a function call, it forces JavaScript to perform four specific steps under the hood:
 * 1. Creates a blank object: It instantiates a fresh, plain JavaScript object {}.
 * 2. Links the prototype: It links this new object's internal [[Prototype]] to the constructor function's prototype property, establishing inheritance.
 * 3. Binds this: It executes the constructor function while pointing the this context to the newly created object (allowing you to assign properties like this.name = name).
 * 4. Returns the object: It automatically returns the newly created object, unless the function explicitly returns its own non-primitive object.
 */
