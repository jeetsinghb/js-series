// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


// Equality check == and comparisions >, <, >=, <= works differently.
// Comparision convert null to a number, treating it as 0.
// That's why null >= 0 is true and null > 0 is false.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log("---");
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

console.log("---");
console.log("2" == 2);
console.log(2 === 3);

console.log("---");
console.log(null == null);
console.log(null == undefined);