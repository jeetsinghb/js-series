"use strict"; // treat all JS code as a newer version

// alert(3 + 3); // we are using nodejs, not browser
// JS engine is in the browser


let name = "Tarjeet"; // string value
let age = 26; // number value
let isLoggedIn = true; // boolean value

/*
In JavaScript, when converting a non-boolean value to a boolean using the Boolean() function, the result is true for any non-zero numeric value and false for zero or NaN (Not a Number).

So, when you convert 3 to a boolean using Boolean(3), the result will be true. Similarly, any non-zero value will result in true. This behavior is consistent with JavaScript's truthy and falsy values.
*/


// Primitive Data Types

// number
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique


// Non-Primitive Data Types
// Objects

console.log(typeof undefined); // undefined => value
console.log(typeof null); // object
