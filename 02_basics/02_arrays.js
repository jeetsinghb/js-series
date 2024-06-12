// Arrays

// .concat() method

const marvel_heros = ['Ironman', 'Spiderman', 'Thor'];

const dc_heros = ['Batman', 'Superman', 'Flash'];

// marvel_heros.push(dc_heroe)
// console.log(marvel_heros); // Inserts dc_heroes array in marve_heros array and NOT concatenating

// Output: [ 'Ironman', 'Spiderman', 'Thor', [ 'Batman', 'Superman', 'Flash' ] ]
// accessing: console.log(marvel_heros[3][0]); // Batman

// const all_Heros = marvel_heros.concat(dc_heros); // Limited to accept single value
// console.log(all_Heros);


// Spread operator

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
// Output: [ 'Ironman', 'Spiderman', 'Thor', 'Batman', 'Superman', 'Flash' ] // NOT limited, you can accept multiple values to concat using spread operator


// .flat() method

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const final_array = another_array.flat(Infinity);
console.log(final_array);

// Explanation

/*

MDN: The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

1. The flat() method: This is a method available for arrays in JavaScript. It's used to flatten arrays, meaning it converts a multi-dimensional array into a one-dimensional array.

2. of Array instances: This means the flat() method is specifically for arrays (which are instances of the Array object) in JavaScript.

3. creates a new array: The flat() method doesn't modify the original array. Instead, it generates and returns a new array with the flattened elements.

4. with all sub-array elements concatenated into it recursively: When flattening, if there are nested arrays (sub-arrays) within the main array, the flat() method concatenates all elements of these nested arrays into the new array. It does this recursively, meaning it also flattens any nested arrays within nested arrays.

5. up to the specified depth: This part refers to the optional parameter you can pass to flat(). This parameter specifies how deep the flattening should go. For example, if you have an array with nested arrays, and you specify a depth of 1, it will only flatten the top-level nested arrays, leaving any deeper nested arrays untouched.

In summary, the flat() method is used to flatten arrays in JavaScript, creating a new one-dimensional array by concatenating all elements of nested arrays recursively up to a specified depth.

*/


// isArray methods

console.log(Array.isArray("Hitesh")); // false - Boolean

console.log(Array.from("Hitesh")); // [ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name: "hitesh"})); // interesting - returns empty array []

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3)); // Returns a new array from a set of elements.
// Output: [ 100, 200, 300 ]