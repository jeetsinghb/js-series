// ********************** NUMBERS **********************

const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); // converts to string
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00 - Decimal value

const otherNumber = 1123.8966;
console.log(otherNumber.toPrecision(3)); // precise value
/*
Eg:
const otherNumber = 33.8966;
console.log(otherNumber.toPrecision(3)); // 33.9
*/

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000 - US based
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 - INR based

/*
*********** MORE ***********
Number.MAX_VALUE
Number.MIN_VALUE
NUMBER.MAX_SAFE_INTEGER
*/


// ********************** MATHS **********************

console.log('---------- MATH ----------');

console.log(Math); // returns functions

console.log(Math.abs(-4)); // 4
/*
 The absolute value gives you the distance of a number from zero,
 considering only the distance and not the direction (positive or negative).
 
 The Math.abs() function in JavaScript is used to obtain the absolute value of a number.
 The absolute value represents the distance of a number from zero on the number line,
 without considering its sign (whether it's positive or negative).

Eg 1:
- let distance = Math.abs(-10); // distance is 10
Eg 2:
- let difference = Math.abs(5 - 12); // difference is 7
Eg 3:
- let value = -15;
- let positiveValue = Math.abs(value); // positiveValue is 15
*/
console.log(Math.round(4.5)); // Round of to 5
console.log(Math.ceil(6.2)); // 7
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // value comes between 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
