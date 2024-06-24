// Arrays

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/*

- Array is an object

- Array can store mutiple elements or values of different data types in a single variable

- Array elements cannot be accessed using arbitrary strings as indexes.
-- eg: array["0"] // Inccorrect way to access the data
-- eg: array[0] // Correct way to access the data

- JavaScript arrays are zero-indexed:
-- the first element of an array is at index 0, the second is at index 1, and so on
-- and the last element is at the value of the array's length property minus 1.

* JavaScript array-copy operations:
1) Shallow Copy: A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)
-- As a result, when you change either the source or the copy, you may also cause the other object to change too.
-- Non-Primitive | Heap Memory

2) Deep Copy: A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values)
-- As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.
-- Primitive = | Stack Memory

*/

const myArr = [0, 1, 2, 3, 4, 5]; // Array with some elements
const heroes = ["Batman", "Superman"];

const myArr2 = new Array(1, 2, 3, 4); // No [] required

console.log(myArr[0]);

// Array methods

myArr.push(6) // adds new element at the end of the array list
myArr.push(7) // adds new element at the array list
myArr.pop(); // removes the last element from the array

myArr.unshift(8) // adds new element at the start
myArr.shift() // removes the first element from the array

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1 

const newArr = myArr.join();
// .join() - Adds all the elements of an array into a string, separated by the specified separator string.

console.log(myArr);
console.log(newArr); // output is in string
// console.log(typeof newArr);

console.log("***************");

// Slice and Splice

console.log("A", myArr); // A [ 0, 1, 2, 3, 4, 5 ]

const myNewArray1 = myArr.slice(1, 3); // index 3 won't be included
// Returns a copy of a section of an array.

console.log(myNewArray1); // [ 1, 2 ]
console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myNewArray2 = myArr.splice(1, 3)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log("C", myArr); // C [ 0, 4, 5 ]
console.log(myNewArray2); // [ 1, 2, 3 ]



