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
// undefined => Nan

let isLoggedIn = "Tarjeet"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 = false
// "" => false
// "hitest" => true

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

let str1 = "hello"
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