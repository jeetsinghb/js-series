// var a = 10; // 10
// let b = 20; // 20
// const c = 30; // 30

// var c = 300 // 300
let b = 300;

if (true) {
    var a = 10;
    // a = 10; // 10;
    let b = 20;
    console.log('block scope:', b);
    const c = 30;
}

console.log(a);
// console.log(b); b is not defined - block scope exampl
console.log(b); // 300 - global scope example
// console.log(c); c is not defined