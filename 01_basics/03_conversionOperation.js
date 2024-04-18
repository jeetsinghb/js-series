const score = undefined; // null, undefined, boolean, string

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)

// console.log(typeof valueInNumber) // Number
// console.log(valueInNumber) // NaN

// "" => 0
// This is because JavaScript attempts to convert the string to a number, and since there are no numerical characters in the string, it evaluates to zero.
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "Tarjeet"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) // true

// 1 => true; 0 = false
// "" => false
// "1" => true
// "0" true
/* null itself does not represent a numeric value, and it is not equivalent to 0. Instead, it is simply a value that represents the absence of a value.
Therefore, when converted to a boolean, it results in false.
*/
// "John" => true
// {} => true
// [] => true
/*
Both an empty array ([]) and an empty object ({}) are considered truthy values in JavaScript.
Therefore, when converted to a boolean, they both result in true. Only certain values such as false, null, undefined, 0, NaN, and an empty string "" would evaluate to false when converted to a boolean.
*/

/*

In JavaScript, when you use the Boolean() function, it converts a value to a Boolean.
The rule is that only a few specific values will result in false when converted to Boolean, and all other values will result in true.
Specifically, the following values will be converted to false:

false
0 (zero)
null
undefined
NaN (not a number)
An empty string ('' or "")
Any other value, including negative numbers like -20, will be converted to true.
*/

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); // 33
// console.log(typeof stringNumber); // string

// ******************** Operations ********************

let value = 3
let negValue = -3
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Tarjeet"

let str3 = str1 + str2
// console.log(str3); // Hello Tarjeet

// console.log("1" + 2); // string; 12
// console.log(1 + "2"); // string; 12
// console.log("1" + 2 + 2); // string; 122
// console.log(1 + 2 + "2"); // string; 32

// console.log( (3 + 4) * 5 % 3); // 35 % 3 -> 2

// Operator precedence
// console.log(true); // true
// console.log(+true); // 1
// console.log(true+); // throws error
// console.log(+""); // 0

// num1 = num2 = num3 = 2 + 2
// console.table([num1, num2, num3])

let gameCounter = 100;
// gameCounter++ // postfix
++gameCounter // prefix
console.log(gameCounter);

// Source: https://medium.com/hackernoon/javascript-back-to-basics-prefix-vs-postfix-8da5256223d2

/*
Explanation:

Increment ++: Increases value by 1

Decrement — —: Decreases value by 1

The ++ or — — can be applied before and after the variable. This is where it gets a bit tricky.

Syntax
Postfix Form: counter++

Prefix Form: ++counter

Although both forms increase the value by 1, there is a difference. The Postfix Form returns the original value of the variable before the increment/decrement The Prefix Form returns the value after the increment/decrement. This difference can be seen if we are using the returned value of the increment/decrement.

Examples:

Prefix:-
let counter = 2;
alert(++counter); // 3 incremented value has been returned

Postfix:-
let counter = 2;
alert(counter++); // 2 Returns the original value before the increment

*/
