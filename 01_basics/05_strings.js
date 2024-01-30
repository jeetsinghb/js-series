const name = "Tarjeet";
const repoCount = 11;

// console.log(name + repoCount + value);

// String interpolation - backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hightech-s-com'); // object

console.log(gameName[0]); // h
console.log(gameName.__proto__); // return all functions

console.log(gameName.length); // 14
console.log(gameName.toUpperCase()); // HIGHTECH-S-COM
console.log(gameName.charAt(4)); // 4
console.log(gameName.indexOf('g')); // 2

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
The slice() method selects from a given start to a (not inclusive) given end.
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

The /.../ syntax in JavaScript defines a regular expression literal.
It's similar to single or double quotes for strings but specifically for regular expressions.

In regular expressions, the g flag stands for "global," and when you append it to a regular expression,
it indicates that the replacement should be applied globally throughout the entire string,
not just on the first occurrence.
Without the g flag, replace would only replace the first occurrence of the pattern in the string.
*/

console.log(url.includes('google')); // return boolean value
console.log(url.includes('john')); // return boolean value

console.log(gameName.split('-'));

/*
The split() method splits a string into an array of substrings.
The split() method returns the new array.
The split() method does not change the original string. If (" ") is used as a separator, the string is split between words.

Eg 1:
- console.log(gameName.split('-'));
- ['hightech', 's', 'com']

Eg 2:
- console.log(gameName.split());
- ['hightech-s-com']
*/


