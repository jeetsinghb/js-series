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
console.log(gameName.charAt(4)); // t
console.log(gameName.indexOf('g')); // 2

const newString = gameName.substring(0, 7);  // ignores last value / won't include last value

/*
The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
*/

console.log(newString);

const anotherString = gameName.slice(-10, 4) // returns empty value
const anotherString = gameName.slice(2, 13) // ghtech-s-co

/*
The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
*/

console.log(anotherString);

/* MORE ABOUT substring() and slice() */

// https://snipboard.io/mi86UH.jpg

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
- The JavaScript split() method is used to break a string into an array of substrings based on a given separator.
- The separator can be a character, string, or regular expression.
- It returns an array and does not change the original string.
- An optional limit parameter can be used to control the number of splits.

Syntax: str.split( separator, limit );

Eg 1:
- console.log(gameName.split('-'));
- ['hightech', 's', 'com']

Eg 2:
- console.log(gameName.split());
- ['hightech-s-com']
*/






