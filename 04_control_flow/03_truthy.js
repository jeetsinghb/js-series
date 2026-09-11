const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??)

/*
# The nullish coalescing operator lets you provide a fallback value when something is specifically: null or undefined

Syntax:

const result = value ?? fallback;

Means: "If value is null or undefined, use fallback. Otherwise, use value."

# Example 1:

const username = null;

const name = username ?? "Guest";

console.log(name); // Guest - Because username is null.


# The important part: ?? vs ||

const value = something || "Default"; // || uses the default when the left side is falsy.


// Falsy values in JavaScript include:

false
0
""
null
undefined
NaN

But ?? only cares about:

null
undefined

# Example 2:

const age = 0;

console.log(age || 18); // 18
console.log(age ?? 18); // 0


# Remember

Value	     value ?? "Default"
null	     "Default"
undefined	 "Default"
0	         0
""	         ""
false	     false
NaN	         NaN


# You can chain ??

# Example 1:

const username = null;
const nickname = undefined;

const displayName = username ?? nickname ?? "Guest";

console.log(displayName); // Guest

# Example 2:

const firstName = null;
const nickname = "Rocky";

const name = firstName ?? nickname ?? "Guest";

console.log(name); // Rocky


# Important JavaScript rule ⚠️

You generally cannot mix ?? directly with || or && without parentheses.

This is invalid:

const result = a ?? b || c;

Instead, use parentheses:

const result = (a ?? b) || c;
or
const result = a ?? (b || c);

*/

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1); // 10

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")