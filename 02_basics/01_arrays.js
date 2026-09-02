// Arrays

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/*

- Array is an object.

- An array can store multiple elements or values of different data types
  in a single variable.

- JavaScript arrays are zero-indexed:
  -- The first element is at index 0.
  -- The second element is at index 1.
  -- The last element is at index array.length - 1.

- Array elements are normally accessed using numeric indexes.

  Example:
  -- array[0]    // Correct
  -- array["0"]  // Also works because array indexes are property keys

- String properties that are not valid array indexes do not access
  array elements.

  Example:
  -- array["name"] // Accesses a property called "name", not an array element.


* JavaScript Array Copy Operations:

1) Shallow Copy:
- Creates a new outer array/object.
- Nested objects/arrays still share the same references.
- Changing a nested object/array through one copy can affect the other.
- The important concept here is shared references.

Example:

const original = [{ name: "Batman" }];
const copy = [...original];

copy[0].name = "Superman";

console.log(original[0].name);
// "Superman"

Both arrays contain a reference to the same nested object.


2) Deep Copy:
- Creates a new array/object and also copies nested objects/arrays.
- Nested objects/arrays do not share the same references.
- Changes to one copy do not affect the other.

Example:

const original = [{ name: "Batman" }];
const copy = structuredClone(original);

copy[0].name = "Superman";

console.log(original[0].name);
// "Batman"

The nested object is also copied.

NOTE:
- Do not simply think:
  "Primitive = Stack" and "Non-Primitive = Heap"
  when learning shallow vs deep copy.
- Shallow vs deep copy is mainly about whether references
  to nested objects/arrays are shared.

*/

const myArr = [0, 1, 2, 3, 4, 5]; // Array with some elements
const heroes = ["Batman", "Superman"];

const myArr2 = new Array(1, 2, 3, 4); // Creates an array using the Array constructor

console.log(myArr[0]); // 0


// Array Methods

myArr.push(6); // Adds an element to the end of the array
myArr.push(7); // Adds another element to the end of the array

myArr.pop(); // Removes the last element from the array

myArr.unshift(8); // Adds an element to the beginning of the array
myArr.shift(); // Removes the first element from the array


console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1


// join()

const newArr = myArr.join();

// .join()
// Converts all elements of an array into a string,
// separated by the specified separator.
// By default, the separator is a comma.

console.log(myArr);
console.log(newArr); // Output is a string

// Example:

console.log([1, 2, 3].join());
// "1,2,3"

console.log([1, 2, 3].join(" - "));
// "1 - 2 - 3"


console.log("***************");


// Slice and Splice

console.log("A", myArr);
// A [ 0, 1, 2, 3, 4, 5 ]


/*
slice()

slice(start, end)

- Returns a copy of a section of an array.
- The start index is included.
- The end index is NOT included.
- Does NOT modify the original array.
*/

const myNewArray1 = myArr.slice(1, 3);

console.log(myNewArray1);
// [1, 2]

console.log("B", myArr);
// Original array is unchanged:
// B [0, 1, 2, 3, 4, 5]


/*
splice()

splice(start, deleteCount)

- Removes elements from the original array.
- start = index where the operation begins.
- deleteCount = number of elements to remove.
- Modifies the original array.
- Returns an array containing the deleted elements.

IMPORTANT:
splice() does NOT use an end index.

Example:

splice(1, 3)

means:

Start at index 1
Remove 3 elements

It removes:

index:  1  2  3
value:  1  2  3
*/


const myNewArray2 = myArr.splice(1, 3);

console.log("C", myArr);
// C [0, 4, 5]

console.log(myNewArray2);
// [1, 2, 3]


/*
Slice vs Splice

slice(start, end)
- end index is exclusive
- Does NOT modify the original array
- Returns a new array containing the selected elements

splice(start, deleteCount)
- Uses a number of elements to remove, NOT an end index
- Modifies the original array
- Returns the deleted elements


Example:

const arr = [0, 1, 2, 3, 4, 5];

arr.slice(1, 3);
// [1, 2]

arr;
// [0, 1, 2, 3, 4, 5]


const arr2 = [0, 1, 2, 3, 4, 5];

arr2.splice(1, 3);
// [1, 2, 3]

arr2;
// [0, 4, 5]


Easy way to remember:

SLICE = section

slice(start, end)


SPLICE = surgery

splice(start, howMany)
*/


// splice() can also insert elements

const numbers = [1, 2, 5];

numbers.splice(2, 0, 3, 4);

console.log(numbers);
// [1, 2, 3, 4, 5]

/*
splice(2, 0, 3, 4)

2       -> Start at index 2
0       -> Delete 0 elements
3, 4    -> Insert 3 and 4
*/
