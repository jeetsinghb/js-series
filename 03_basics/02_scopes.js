// SCOPES V1

// GLOBAL SCOPES:

// var a = 10; // 10
// let b = 20; // 20
// const c = 30; // 30

// var c = 300 // 300
let b = 300;

if (true) {
    // BLOCK SCOPES:

    var a = 10;
    // a = 10; // 10;
    let b = 20;
    // console.log('block scope:', b);
    const c = 30;
}

// console.log(a);
// console.log(b); b is not defined - block scope exampl
// console.log(b); // 300 - global scope example
// console.log(c); c is not defined


// SCOPES V2

function Parent() {
    const username = "Developer"

    function Child() {
        const website = "google";
        console.log(username); // developer - closure
    }
    console.log(website); // website is not defined -> block scope - cannot access

    Child(); // did not execute due to error on line no 37
}

// Parent();

// # Ice Cream Exmaple by Hitesh Choudhary

if (true) {
    const username = "dominic: ";
    if (username) {
        const website = "github.com/jeetsinghb";
        // console.log(username + website);
    }
    // console.log(website); // website is not defined execution stopped
}

// console.log(username); // website is not defined


// +++++++++++++++++ INTERESTING +++++++++++++++++

// # function declaration

console.log(addOne(5)); // 6

function addOne(num) {
    return num + 1;
}

// addOne(5);


// # function expression

// addTwo(6) // cannot access "addTwo" before initialization - HOISTING

const addTwo = function(num) {
    return num + 2;
}

// console.log(addTwo(6)); // 8