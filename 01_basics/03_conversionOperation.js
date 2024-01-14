const score = undefined; // null, undefined, boolean, string

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "Tarjeet"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 = false
// "" => false
// "John" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

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
// console.log(str3);

// console.log("1" + 2); // string; 12
// console.log(1 + "2"); // string; 12
// console.log("1" + 2 + 2); // string; 12
// console.log(1 + 2 + "2"); // string; 32

// console.log( (3 + 4) * 5 % 3);

// Operator precedence
// console.log(+true);
// console.log(+"");

// num1 = num2 = num3 = 2 + 2
// console.table([num1, num2, num3])

let gameCounter = 100;
// gameCounter++ // postfix
++gameCounter // prefix
console.log(gameCounter);

// Source: https://medium.com/hackernoon/javascript-back-to-basics-prefix-vs-postfix-8da5256223d2

/*
Explanation:

Increment ++: Increases variable by 1

Decrement — —: Decreases variable by 1

The ++ or — — can be applied before and after the variable. This is where it gets a bit tricky.

Syntax
Postfix Form: counter++

Prefix Form: ++counter

Although both forms increase the variable by 1, there is a difference. The Postfix Form returns the original value of the variable before the increment/decrement The Prefix Form returns the value after the increment/decrement. This difference can be seen if we are using the returned value of the increment/decrement.

Example:
Prefix

let counter = 2;
alert(++counter); // 3 incremented value has been returned
Postfix

let counter = 2;
alert(counter++); // 2 Returns the original value before the increment

*/
