// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
        // console.log('5th loop');
    }
    // console.log(element);
}

// console.log(element); // element is not defined


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 1; j <= 10; j++) { // runs x times before the loop breaks
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i + "x" + j + "=" + i * j); // returns tables
    }
    
}


let myArray = ['flash', 'batman', 'superman'];

// console.log(myArray.length); // 3

for (let index = 0; index < myArray.length; index++) {
    const el = myArray[index]
    // console.log(el);
}


// break and continue

for (let num = 1; num <= 20; num++) {
    if(num === 5) {
        // console.log("Detected 5");
        break; // breaks out of loop
    }
    // console.log(`value of num is: ${num}`);
}


for (let num = 1; num <= 10; num++) {
    if(num === 5) {
        console.log("Detected 5");
        continue; // skip num 5 and continue the loop without break
    }
    console.log(`value of num is: ${num}`);
}
