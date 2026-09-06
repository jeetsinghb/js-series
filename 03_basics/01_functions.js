
console.log("----- FUNCTIONS PART 1 -----");

// function defination

function log() {
    console.log('Function ran');
}

// console.log(log) // [function] - Reference
// console.log(log()) // function ran
// log(); // function ran


function addTwoNumbers(num1, num2) { // parameters
    console.log(num1 + num2);
}

const result = addTwoNumbers(3, 5); // 8
console.log("Result: ", result); // undefined

// addTwoNumbers(); // NaN
// addTwoNumbers(2, 4); // arguments -  6
// addTwoNumbers(2, "2") // 22
// addTwoNumbers(2, "a"); // 2a
// addTwoNumbers(3, null) // 3

// Examples and explanations

function addition(num1, num2) {
    // console.log(num1 + num2);
    return num1 + num2
}

console.log(addition()); // NaN

console.log(addition(4, 4)); // 8

console.log(addition(4 + "4")); // 44undefined
// addition("44")
// "44" + undefined → "44undefined"

console.log(addition(2, null)); // 2
// null → intentionally empty → treated as 0 in numeric conversion

console.log(addition(2, undefined)); // NaN
// undefined → value not provided → converts to NaN

console.log(addition(2)); // 2
/*

Only one argument provided, but your function expects two:

Then your function does:

return 2 + undefined;

2 + undefined // NaN

Number(undefined) // NaN

Key takeaway:
If you don't pass an argument, JavaScript gives that parameter the value undefined.

*/

function addition(number1, number2) {

    // Method 1:

    // let result = number1 + number2;
    // return result;

    // Method 2:
    return number1 + number2;

    // console.log('Logged!'); // any code after the return statement won't run
}

// addition(3, 4);
console.log(addition(3, 4)); // 7


function loginUserMessage(username) {

    // Method 1:
    // if(username === undefined){

    // Method 2:
    if(!username){
        console.log('Please enter a username');
        return;
    }
    return `Welcome, ${username}!`; // string interpolation
}

// loginUserMessage(); // reference
// loginUserMessage('John Doe');

// console.log(loginUserMessage('John Doe'));

console.log(loginUserMessage()); // undefined


function defaultValue(username = "Robin") { // default value
    return `Hello, ${username}!`;
}

console.log(defaultValue()); // Robin
console.log(defaultValue('Sam')); // Sam


console.log("----- FUNCTIONS PART 2 -----");

// Using rest/spread operator

function calculateCartPrice(...val) {
    return val;
}

console.log(calculateCartPrice(100, 200, 300)); // [ 100, 200, 300 ]


function calculateCartPrice2(num1, num2, ...val) {
    return val;
}

console.log(calculateCartPrice2(200, 600, 400, 600)); // [400, 600]

console.log('-----')


const user = {
    username: "developer",
    price: 355,
    // prices: 355, // undefined
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// method 1:
handleObject(user); // Username is developer and price is 355

// method 2
handleObject({
    username: "sam",
    price: 533,
})

console.log('-----')

const myNewArray = [200, 300, 600];

function returnSecondValue (getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // 300

console.log(returnSecondValue([400, 600, 700])); // 600
