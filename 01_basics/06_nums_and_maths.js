// ********************** NUMBERS **********************

const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // Decimal

const otherNumber = 1123.8966;
console.log(otherNumber.toPrecision(3)); // precise value

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // US based
console.log(hundreds.toLocaleString('en-IN')); // INR based

/*
*********** MORE ***********
Number.MAX_VALUE
Number.MIN_VALUE
NUMBER.MAX_SAFE_INTEGER
*/


// ********************** MATHS **********************