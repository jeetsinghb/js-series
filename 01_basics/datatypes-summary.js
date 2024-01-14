// Primitive - Call by value

// 7 Types: String, Number, Boolean, null, undefined, Symbol. BigInt

/*
Javascript is Dynamically typed language
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 6456546549651465456n



// Non-Primitive / Reference Type - Call by reference

// Arrays, Objects, Functions

const heros = ['Spiderman', 'Iron Man', 'Batman'];

let obj = {
    name: "John",
    age: 27
}

// function() {} // function defination

const myFunction = function() {
    console.log("Hello World!");
}



console.log(typeof outsideTemp);
console.log(typeof myFunction); // Object function

// Reference: https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack and Heap Memory

// Stack (Primitive) - Call by value
// Heap (Non-Primitive) - Call by reference

let userName = "John Doe";

let updateUserName = userName;
updateUserName = "Tarjeet";

console.log(userName);
console.log(updateUserName);

let userOne = {
    usr: "Jack",
    email: "jack@yahoo.com"
}

let userTwo = userOne

userTwo.email = "jack@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);