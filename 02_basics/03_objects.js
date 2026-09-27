// singleton
// Object.create -> constructor method

// object literals

const mySymbol = Symbol('name');

const JsUser = {
    name: "Tarjeet", // key: value
    "full name": "Tarjeet Singh",
    // mySymbol: "Tarjeet", // incorrect way of adding Symbol
    [mySymbol]: "Tarjeet", // correct way
    age: 22,
    location: "Mumbai",
    email: "developer@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.name); // Tarjeet
console.log(JsUser["name"]); // Tarjeet
console.log(JsUser["full name"]); // Tarjeet Singh
console.log(JsUser[mySymbol]); // Tarjeet
// console.log(typeof JsUser[mySymbol]); // string

// Symbols are useful when you want a property key that is unique and unlikely to clash with other properties.

JsUser.email = "developer@yahoo.com";
// Object.freeze(JsUser) // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
JsUser.email = "developer@google.com";

console.log(JsUser);

JsUser.greeting = function() {
    console.log('Hello Js user');
}

JsUser.greeting2 = function() {
    console.log(`Hello Js user, ${this.name}`);
}

// console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting()); // Hello Js user

console.log(JsUser.greeting2());

