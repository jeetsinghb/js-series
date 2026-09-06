// Immediately Invoked Function Expressions (IIFE)

(function iifeFunc() {
    // named IIFE
    console.log('DB CONNECTED');
})(); // ";" is required to end the code execution in IIFE


// ()() -> defination + execution


// use the IIFE when we dont want to polute the global scope or execute a function immediately

( () => {
    console.log(`DB CONNECTED TWO`);
} )();


( (name) => {
    console.log(`DB CONNECTED AT ${name}`);
} )('dominic')