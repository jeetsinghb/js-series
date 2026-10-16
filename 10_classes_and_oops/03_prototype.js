let myName = "developer     ";

console.log(myName.length); // property

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is: ${this.spiderman}`);
    }
}

// Object.create() // Factory Function

Object.prototype.CustomPower = function () {
    console.log('This is a custom power');
}

Array.prototype.heyUser = function () {
    console.log('Admin says hello');
}

// heroPower.CustomPower() // This is a custom power
myHeros.CustomPower() // This is a custom power
myHeros.heyUser() // Admin says hello
// heroPower.heyUser() //  heroPower.heyUser is not a function

console.log('-----');


// inheritance

const User = {
    name: "developer",
    email: "developer@google.com"
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User; // Now, if you access a property on Teacher that doesn't exist on Teacher itself, JavaScript looks for it on User.

console.log(Teacher);
// The console displays the Teacher object's own properties. The inherited properties from User usually aren't displayed directly in this object preview.

console.log(Teacher.makeVideo); // true
console.log(Teacher.name);      // "developer"
console.log(Teacher.email);    // "developer@google.com"

// Remember: JavaScript prototypal inheritance lets an object access properties and methods from another object through its prototype chain. In your example, Teacher inherits from User, while TASupport inherits from TeachingSupport. These are two separate prototype relationships.


// Although __proto__ works in your example, it is considered a legacy accessor. Prefer Object.create() or Object.setPrototypeOf() when setting up prototype relationships.

/* 

# EXAMPLE:

const Teacher = Object.create(User);

Teacher.makeVideo = true;

console.log(Teacher.name);      // "developer"
console.log(Teacher.makeVideo); // true

*/


// MODERN SYNTAX

Object.setPrototypeOf(TeachingSupport, Teacher)

console.log('-----');


// trueLength()

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"developer".trueLength();
"newDeveloper".trueLength();