// ============================================================
// JAVASCRIPT COMPARISON OPERATORS & TYPE COERCION
// ============================================================


// ============================================================
// 1. BASIC COMPARISON OPERATORS
// ============================================================

console.log(2 > 1);   // true  -> 2 is greater than 1
console.log(2 >= 1);  // true  -> 2 is greater than or equal to 1
console.log(2 < 1);   // false -> 2 is not less than 1
console.log(2 <= 1);  // false -> 2 is not less than or equal to 1

console.log(2 == 1);  // false -> 2 is not equal to 1
console.log(2 != 1);  // true  -> 2 is not equal to 1


// ============================================================
// 2. TYPE COERCION
// ============================================================

// Type coercion means JavaScript automatically converts
// one data type into another when necessary.
//
// For relational operators such as:
// >, <, >=, <=
//
// JavaScript attempts to convert a string to a number
// when comparing a string with a number.

console.log("2" > 1);     // true
// "2" is converted to the number 2.
//
// "2" > 1
//  2  > 1
// true


console.log("02" > 1);    // true
// "02" is converted to the number 2.
//
// "02" > 1
//   2  > 1
// true


console.log("apple" > 1); // false
// "apple" cannot be converted into a valid number.
//
// Number("apple") -> NaN
//
// Therefore:
//
// NaN > 1
// false
//
// Any relational comparison involving NaN results in false.


// ============================================================
// 3. == VS >, <, >=, <=
// ============================================================

// IMPORTANT:
//
// The == operator and relational operators
// (> < >= <=) follow different rules.
//
// This is why the following results can look strange.

console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true


// ------------------------------------------------------------
// null > 0
// ------------------------------------------------------------

// For relational comparison, null is converted to 0.
//
// null > 0
//  0   > 0
// false

console.log(null > 0); // false


// ------------------------------------------------------------
// null >= 0
// ------------------------------------------------------------

// Again, null is converted to 0.
//
// null >= 0
//  0   >= 0
// true

console.log(null >= 0); // true


// ------------------------------------------------------------
// null == 0
// ------------------------------------------------------------

// The == operator has special rules for null.
//
// null is loosely equal to undefined:
//
// null == undefined -> true
//
// But null is NOT loosely equal to:
//
// null == 0      -> false
// null == false  -> false
// null == ""     -> false

console.log(null == 0); // false


// ============================================================
// 4. undefined IN COMPARISONS
// ============================================================

// When undefined is converted to a number:
//
// Number(undefined) -> NaN

console.log(undefined > 0); // false
console.log(undefined < 0); // false


// undefined > 0
//
// NaN > 0
// false


// undefined < 0
//
// NaN < 0
// false


// undefined is also not loosely equal to 0.

console.log(undefined == 0); // false


// ============================================================
// 5. LOOSE EQUALITY (==)
// ============================================================

// == is called "loose equality".
//
// It can perform type coercion before comparing values.

console.log("2" == 2); // true
// "2" is converted to 2.
//
// "2" == 2
//  2  == 2
// true


console.log(true == 1); // true
// true is converted to 1.
//
// true == 1
//  1   == 1
// true


console.log(false == 0); // true
// false is converted to 0.
//
// false == 0
//   0   == 0
// true


// ============================================================
// 6. STRICT EQUALITY (===)
// ============================================================

// === is called "strict equality".
//
// It does NOT perform type coercion.
//
// Both the TYPE and VALUE must be the same.

console.log("2" === 2); // false
// "2" -> string
// 2   -> number
//
// Different types -> false


console.log(2 === 2); // true
// Same type + same value -> true


console.log(2 === 3); // false
// Same type, but different values -> false


// In most situations, prefer === over ==
// because it is more predictable.


// ============================================================
// 7. null AND undefined
// ============================================================

// Special rule for loose equality:
//
// null == undefined -> true

console.log(null == undefined); // true


// But strict equality checks the types as well:
//
// null    -> object
// undefined -> undefined
//
// Different types -> false

console.log(null === undefined); // false


// ============================================================
// 8. null COMPARED WITH ITSELF
// ============================================================

console.log(null == null);   // true
console.log(null === null);  // true

// Same type + same value -> true


// ============================================================
// 9. undefined COMPARED WITH ITSELF
// ============================================================

console.log(undefined == undefined);  // true
console.log(undefined === undefined); // true

// Same type + same value -> true


// ============================================================
// 10. NaN (NOT-A-NUMBER)
// ============================================================

// NaN is a special numeric value that represents
// an invalid or unrepresentable numerical result.

console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false


// One unusual rule in JavaScript:
//
// NaN is NOT equal to itself.
//
// NaN === NaN -> false


// ============================================================
// 11. HOW TO CHECK FOR NaN
// ============================================================

// Prefer Number.isNaN() when you specifically want to
// check whether a value is the actual NaN value.

console.log(Number.isNaN(NaN)); // true


// Example:

const result = Number("hello");

console.log(result);                 // NaN
console.log(Number.isNaN(result));   // true


// ============================================================
// 12. QUICK CHEAT SHEET
// ============================================================

// Basic comparisons:

console.log(2 > 1);    // true
console.log(2 >= 1);   // true
console.log(2 < 1);    // false
console.log(2 <= 1);   // false
console.log(2 == 1);   // false
console.log(2 != 1);   // true


// Type coercion:

console.log("2" > 1);     // true
console.log("02" > 1);    // true
console.log("apple" > 1); // false


// null:

console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true


// undefined:

console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false


// Loose vs strict equality:

console.log("2" == 2);  // true
console.log("2" === 2); // false


// null vs undefined:

console.log(null == undefined);  // true
console.log(null === undefined); // false


// NaN:

console.log(NaN == NaN);        // false
console.log(NaN === NaN);       // false
console.log(Number.isNaN(NaN)); // true


// ============================================================
// 13. MOST IMPORTANT RULES TO REMEMBER
// ============================================================

// 1. == can perform type coercion.

console.log("2" == 2); // true


// 2. === does NOT perform type coercion.

console.log("2" === 2); // false


// 3. null and undefined are loosely equal.

console.log(null == undefined); // true


// 4. null is NOT loosely equal to 0.

console.log(null == 0); // false


// 5. NaN is not equal to itself.

console.log(NaN === NaN); // false


// 6. Use Number.isNaN() to check for NaN.

console.log(Number.isNaN(NaN)); // true


// 7. In most cases, prefer === and !==
//    over == and != because they avoid unexpected
//    type coercion.
