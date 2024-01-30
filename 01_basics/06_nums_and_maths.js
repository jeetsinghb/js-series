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

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(6.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // value comes between 1 to 0
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
