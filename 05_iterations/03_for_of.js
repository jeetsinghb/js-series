// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num); // 1-5 loop
}

const greetings = "Hello World!";

for (const greet of greetings) {
    // console.log(greet); // loops string
}

// Maps - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

/**
 * Holds the same order
 * Value needs to be unique
*/

const map = new Map();

map.set('IN', 'India');
map.set('JP', 'Japan');
map.set('FR', 'France');
// map.set('IN', 'India'); // wont add again

// console.log(map); // Map(3) { 'IN' => 'India', 'JP' => 'Japan', 'FR' => 'France' }

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    'game1': "NFS",
    "game2": "Spiderman"
    // try:-
    // game1: "NFS",
    // game2: "Spiderman"
}

// for (const [key, value] of myObj) {
//     console.log(key, value);
//     // myObj is not iterable
// }