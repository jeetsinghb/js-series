// Arrays

// .concat() method

const marvel_heros = ['Ironman', 'Spiderman', 'Thor'];

const dc_heros = ['Batman', 'Superman', 'Flash'];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // Inserts dc_heros array as ONE element inside marvel_heros array and does NOT concatenate

// Output: [ 'Ironman', 'Spiderman', 'Thor', [ 'Batman', 'Superman', 'Flash' ] ]

// accessing:
// console.log(marvel_heros[3][0]); // Batman


const all_Heros = marvel_heros.concat(dc_heros);
console.log(all_Heros);

// Output:
// [ 'Ironman', 'Spiderman', 'Thor', 'Batman', 'Superman', 'Flash' ]

// .concat() can accept multiple values
const all_heros = marvel_heros.concat(dc_heros, ['Hulk', 'Antman'], 'Loki');

console.log(all_heros);


// Spread operator

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

// Output:
// [ 'Ironman', 'Spiderman', 'Thor', 'Batman', 'Superman', 'Flash' ]

// Spread operator expands/unpacks the elements of an array
// You can spread multiple arrays and values


// .flat() method

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const final_array = another_array.flat(Infinity);
console.log(final_array);

// Output:
// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


// Explanation

/*

MDN: The flat() method of Array instances creates a new array with all sub-array
elements concatenated into it recursively up to the specified depth.

1. The flat() method:
   This is a method available for arrays in JavaScript.
   It's used to flatten arrays, meaning it converts a multi-dimensional
   array into a less nested array.

2. Creates a new array:
   The flat() method doesn't modify the original array.
   Instead, it generates and returns a new array with the flattened elements.

3. Recursively flattens sub-arrays:
   When flattening, if there are nested arrays within the main array,
   the flat() method also flattens nested arrays according to the
   specified depth.

4. Specified depth:
   The optional parameter passed to flat() specifies how deep
   the flattening should go.

   Example:

   const arr = [1, 2, [3, 4, [5, 6]]];

   arr.flat(1);
   // [1, 2, 3, 4, [5, 6]]

   arr.flat(2);
   // [1, 2, 3, 4, 5, 6]

5. Infinity:
   Using Infinity as the depth flattens all nested arrays.

   arr.flat(Infinity);
   // [1, 2, 3, 4, 5, 6]

In summary, the flat() method is used to flatten nested arrays,
creating a new array by recursively flattening sub-arrays
up to the specified depth.

*/


// Array.isArray() method

console.log(Array.isArray("Hitesh")); // false - Boolean

console.log(Array.isArray([1, 2, 3])); // true - Boolean


// Array.from() method

console.log(Array.from("Hitesh"));
// [ 'H', 'i', 't', 'e', 's', 'h' ]

// Array.from() creates a new array from an iterable or array-like value.

console.log(Array.from({ name: "hitesh" }));
// interesting - returns empty array []

// The above returns an empty array because the object is neither
// iterable nor an array-like object with a length property.


// Array.of() method

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3));
// Returns a new array from a set of elements.

// Output:
// [ 100, 200, 300 ]


// Important difference between Array() and Array.of()

console.log(Array(5));
// Creates an array with 5 empty slots

console.log(Array.of(5));
// [ 5 ]
