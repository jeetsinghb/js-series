// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// Type Coercion
// console.log("2" > 1); // true
// console.log("02" > 1); // true

/*
Explanation:

In JavaScript, the comparison operators (>, <, >=, <=) perform automatic type coercion if the operands are of different types. When comparing a string and a number using these operators, the string is implicitly converted to a number before the comparison takes place.

If one of the operands is a string and the other is a number, JavaScript will attempt to convert the string to a number before comparing.

console.log("2" > 1);   // true, because "2" is converted to the number 2
console.log("02" > 1);  // true, because "02" is converted to the number 2
console.log("apple" > 1);  // false, because "apple" cannot be converted to a number

*/


// Equality check == and comparisions >, <, >=, <= works differently.
// Comparision converts null to a number, treating it as 0.
// That's why null >= 0 is true and null > 0 is false.

console.log(null > 0); // false
// In this case, JavaScript performs type coercion when comparing null to 0 using the greater than (>). null is treated as 0 in numeric comparisons, so effectively, it is like comparing 0 > 0, which is false.
console.log(null == 0); // false
// The == operator performs type coercion if the operands are of different types. However, there is a special rule for null and undefined equality comparisons. According to the equality comparison algorithm, if one operand is null and the other is 0, the result is false.
console.log(null >= 0); // true
// The greater than or equal to (>=) operator also performs type coercion. In this case, null is coerced to 0, so the comparison effectively becomes 0 >= 0, which is true.

console.log("---");
console.log(undefined > 0); // false
// When comparing undefined to 0 using the greater than (>), JavaScript performs type coercion. Similar to null, undefined is treated as NaN (Not a Number) in numeric comparisons. Therefore, the comparison effectively becomes NaN > 0, which is false.
console.log(undefined < 0); // false
// Similarly, when comparing undefined to 0 using less than (<), JavaScript performs type coercion, and the comparison becomes NaN < 0, which is also false.
console.log(undefined == 0); // false
// The == operator performs type coercion, but there is a special rule for undefined. When comparing undefined with any numeric value (including 0), the result is false. This is part of the rules for the equality comparison algorithm.

console.log("---");
console.log("2" == 2); // true
console.log(2 === 3); // false

console.log("---");
console.log(null == null); // true
// The equality comparison of null == null is true. When comparing null with itself, the result is true, as both sides of the equality are of the same type and have the same value.
console.log(undefined == undefined); // true
// Similar to the case with null, the equality comparison of undefined == undefined is true. When comparing undefined with itself, the result is true.
console.log(null == undefined);
/*
The equality comparison of null == undefined is also true, but this is a special case in JavaScript. According to the equality comparison rules, when comparing null with undefined using the equality operator (==), the result is true. This behavior is specific to the == operator and is part of the language design.

It's worth noting that while these equality comparisons may seem straightforward, using strict equality (===) is often recommended for more predictable and less error-prone code. The strict equality operator does not perform type coercion, so it only returns true if the operands are of the same type and have the same value.
*/


// Extras:

/*
console.log(NaN == NaN);
Why is it false?

The expression NaN == NaN evaluates to false in JavaScript, and this behavior is by design. The reason behind this is that NaN (Not a Number) is considered a special value representing the result of an undefined or unrepresentable mathematical operation.

When comparing values using the equality operator (==), JavaScript follows the IEEE 754 standard for floating-point arithmetic, which defines the behavior of floating-point numbers, including NaN. According to this standard, two NaN values are not considered equal to each other.

The rationale behind this design decision is that NaN is not meant to represent a specific numeric value but rather an undefined or unrepresentable result. Therefore, the equality comparison between two NaN values is intentionally set to false to indicate that they are not identical in the sense of having the same numeric value.

If you need to check if a value is NaN, you should use the isNaN() function:

console.log(isNaN(NaN)); // true

*/
