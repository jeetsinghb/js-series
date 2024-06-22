// singleton - constructor

// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "abc123";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "john@gmail.com",
    fullname: {
        userfullname: {
         firstname: "john"   ,
         lastname: "doe"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const objResult = { obj1, obj2 };

// const objResult = Object.assign({}, obj1, obj2, obj3);
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

const objResult = {...obj1, ...obj2}

// console.log(objResult);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


const users = [
    {
        id: 1,
        email: "john@yahoo.com"
    },
    {
        id: 2,
        email: "johnny@yahoo.com"
    },
    {
        id: 3,
        email: "jade@yahoo.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Determines whether an object has a property with the specified name.
