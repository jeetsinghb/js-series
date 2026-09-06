const user = {
    username: "jeetsingh",
    price: 999,
    welcomeMessage: function() {
        // this -> current context / current values
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();

// user.username = "Sam";

// user.welcomeMessage(); // Sam, welcome to website

/*

jeetsingh, welcome to website
{
  username: 'jeetsingh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
Sam, welcome to website
{
  username: 'Sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}

*/


console.log(this); // {} - because we are in node env, but try this in a different env (eg: google console)

function coffee() {
    let username = "developer";
    // console.log(this);
    console.log(this.username); // undefined
}

coffee();


const tea = function() {
    let username = "devguru";
    console.log(this.username); // undefined
}

tea();


const drink = () => {
    let n = "cola";
    // console.log(this);
    console.log(this.n); // undefined
}

drink();


// # Arrow Function

// () => {}

// explicit return -> {} / {return ...}

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(2, 2)); // 4

// implicit return 

// Method 1:
// const addThree = (num1, num2, num3) => num1 + num2 + num3;

// Method 2:
const addThree = (num1, num2, num3) => (num1 + num2 + num3);

console.log(addThree(1, 4, 5)); // 10


// returning an object -> ( ... )

const print = () => ({ username: "developer" })

console.log(print());


// Extras:

// const myArray = [100, 200, 300];

// myArray.forEach( function() {} )
// myArray.forEach( () => {} )