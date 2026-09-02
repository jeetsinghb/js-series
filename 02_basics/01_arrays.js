// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/*

ARRAYS
======

- An array is an object.

- An array can store multiple values of different data types in a single variable.

Example:

const arr = [10, "Hello", true, null];


ARRAY INDEXING
==============

- JavaScript arrays are zero-indexed.

-- First element  → index 0
-- Second element → index 1
-- Third element  → index 2
-- Last element   → index array.length - 1

Example:

const fruits = ["Apple", "Banana", "Mango"];

fruits[0]; // "Apple"
fruits[1]; // "Banana"
fruits[2]; // "Mango"


- Array indexes are numeric property keys.

- A string representation of a valid index also works.

Example:

fruits[0];    // "Apple"
fruits["0"];  // "Apple"


- A non-index string accesses a property, not an array element.

Example:

fruits["name"]; // undefined

We can add a property called "name":

fruits.name = "My Fruits";

fruits["name"]; // "My Fruits"
fruits.name;    // "My Fruits"

IMPORTANT:
"name" is a property, not an array index.


ARRAY COPY OPERATIONS
=====================

1) SHALLOW COPY
---------------

- Creates a new array.
- If the array contains objects or arrays, those nested values are still shared.
- Changing nested data can affect the original.

Example:

const original = [{ name: "Batman" }];

const copy = [...original];

copy[0].name = "Superman";

console.log(original);
// [{ name: "Superman" }]

console.log(copy);
// [{ name: "Superman" }]

Why?

The arrays are different, but the object inside them is shared.


2) DEEP COPY
------------

- Creates a new array.
- Nested objects/arrays are also copied.
- Changes to nested data in the copy don't affect the original.
- structuredClone() can be used to create a deep copy.

Example:

const original = [{ name: "Batman" }];

const copy = structuredClone(original);

copy[0].name = "Superman";

console.log(original);
// [{ name: "Batman" }]

console.log(copy);
// [{ name: "Superman" }]


IMPORTANT:

[...original]
→ Shallow copy

structuredClone(original)
→ Deep copy

For simple arrays containing only primitive values,
[...original] is usually enough.


ARRAY METHODS
=============

const myArr = [0, 1, 2, 3, 4, 5];

const heroes = ["Batman", "Superman"];

const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[0]);
// 0


push()
======

- Adds an element to the end of the array.
- Returns the new length of the array.

Example:

myArr.push(6);
myArr.push(7);


pop()
======

- Removes the last element from the array.
- Returns the removed element.

Example:

myArr.pop();


unshift()
=========

- Adds an element to the beginning of the array.
- Returns the new length of the array.

Example:

myArr.unshift(8);


shift()
========

- Removes the first element from the array.
- Returns the removed element.

Example:

myArr.shift();


includes()
==========

- Checks whether an array contains a specific value.
- Returns true or false.

Example:

console.log(myArr.includes(9));
// false


indexOf()
=========

- Returns the index of the first occurrence of a value.
- Returns -1 if the value is not found.

Example:

console.log(myArr.indexOf(9));
// -1


join()
======

- Converts all elements of an array into a string.
- Uses a comma as the default separator.
- You can provide your own separator.

Example:

const newArr = myArr.join();

console.log(myArr);
// [0, 1, 2, 3, 4, 5]

console.log(newArr);
// "0,1,2,3,4,5"

console.log([1, 2, 3].join(" - "));
// "1 - 2 - 3"


SLICE AND SPLICE
================

SLICE
-----

slice(start, end)

- Returns a copy of a section of an array.
- start index is included.
- end index is NOT included.
- Does NOT modify the original array.
- Returns a new array.


Example:

const myArr = [0, 1, 2, 3, 4, 5];

const myNewArray1 = myArr.slice(1, 3);

console.log(myNewArray1);
// [1, 2]

console.log(myArr);
// [0, 1, 2, 3, 4, 5]


IMPORTANT:

slice(1, 3)

Index 1 → included
Index 2 → included
Index 3 → NOT included


SPLICE
-----

splice(start, deleteCount)

- Removes elements from the original array.
- start = index where the operation begins.
- deleteCount = number of elements to remove.
- Modifies the original array.
- Returns the deleted elements.

IMPORTANT:
splice() does NOT use an end index.


Example:

const myArr = [0, 1, 2, 3, 4, 5];

const myNewArray2 = myArr.splice(1, 3);

console.log(myNewArray2);
// [1, 2, 3]

console.log(myArr);
// [0, 4, 5]


WHY?

splice(1, 3)

1 → Start at index 1
3 → Remove 3 elements

So:

Index:  0  1  2  3  4  5
Value:  0  1  2  3  4  5
           └─────┘
            Remove

Remaining:

[0, 4, 5]


SLICE VS SPLICE
===============

slice(start, end)

- end is an index.
- end is NOT included.
- Does NOT modify the original array.
- Returns a new array.


splice(start, deleteCount)

- deleteCount is a number of elements.
- Modifies the original array.
- Returns the deleted elements.


Example:

const arr1 = [0, 1, 2, 3, 4, 5];

arr1.slice(1, 3);
// [1, 2]

console.log(arr1);
// [0, 1, 2, 3, 4, 5]


const arr2 = [0, 1, 2, 3, 4, 5];

arr2.splice(1, 3);
// [1, 2, 3]

console.log(arr2);
// [0, 4, 5]


EASY WAY TO REMEMBER
====================

# SLICE

slice(start, end)


# SPLICE

splice(start, howMany)


SPLICE CAN ALSO INSERT ELEMENTS
================================

splice() can also insert elements into an array.

Example:

const numbers = [1, 2, 5];

numbers.splice(2, 0, 3, 4);

console.log(numbers);
// [1, 2, 3, 4, 5]


Explanation:

splice(2, 0, 3, 4)

2       → Start at index 2
0       → Delete 0 elements
3, 4    → Insert 3 and 4


FINAL QUICK REVISION
====================

push()
→ Add to end

pop()
→ Remove from end

unshift()
→ Add to beginning

shift()
→ Remove from beginning

includes()
→ Check if value exists

indexOf()
→ Find index of value

join()
→ Convert array to string

slice()
→ Copy a section
→ End index is NOT included
→ Does NOT modify original

splice()
→ Remove/insert elements
→ Uses deleteCount, NOT an end index
→ Modifies original

[...array]
→ Shallow copy

structuredClone(array)
→ Deep copy

*/
