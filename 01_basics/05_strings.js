const name = "Tarjeet";
const repoCount = 11;

// console.log(name + repoCount + value);

// String interpolation - back ticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hightech-s-com'); // object

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 7);  // ignores last value / won't include last value
/*
The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
The substring() method extracts characters from start to end (exclusive).
The substring() method does not change the original string.
*/
console.log(newString);

const anotherString = gameName.slice(-10, 4)
/*
The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array.
*/
console.log(anotherString);

const newStringOne = "     John     ";
console.log(newStringOne);
console.log(newStringOne.trim()); // works for white spaces and new line

const url = "https://google.com/youtube%20website";
console.log(url.replace('%20', '-'));
/*
The replace method in JavaScript only replaces the first occurrence of the specified substring.
If you want to replace all occurrences of %20 with -, you should use a regular expression with the global (g) flag.

console.log(url.replace(/%20/g, '-'));

The /.../ syntax in JavaScript is used to define a regular expression literal.
It's similar to using single or double quotes for strings but is specifically for regular expressions.

In regular expressions, the g flag stands for "global," and when you append it to a regular expression,
it indicates that the replacement should be applied globally throughout the entire string,
not just on the first occurrence.
Without the g flag, replace would only replace the first occurrence of the pattern in the string.
*/

console.log(url.includes('google'));
console.log(url.includes('john'));

console.log(gameName.split('-'));
