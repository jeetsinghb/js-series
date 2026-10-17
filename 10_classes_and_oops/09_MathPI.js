const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descriptor);

/*

{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

*/

console.log('-----');

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5; // Note: Cannot override
// console.log(Math.PI)

// Object.create(null) // Factory fn

const coffee = {
    name: "Black Coffee",
    price: 299,
    isAvailable: true,

    orderCoffee: function () {
        console.log('Order failed');
    }
}

// console.log(coffee); // { name: 'Black Coffee', price: 299, isAvailable: true }

// console.log(Object.getOwnPropertyDescriptor(coffee)); // undefined

console.log(Object.getOwnPropertyDescriptor(coffee, 'name'));

/*

{
  value: 'Black Coffee',
  writable: true,
  enumerable: true,
  configurable: true
}

*/

console.log('-----');

Object.defineProperty(coffee, 'name', {
    writable: false,
    enumerable: false, // if true the 'name' wont be interable
})

console.log(Object.getOwnPropertyDescriptor(coffee, 'name'))

// for (let [key, value] of coffee) { // coffee is not iterable

for (let [key, value] of Object.entries(coffee)) {
    if (typeof value !== 'function') {
        console.log(`key: ${key} : ${value}`);
    }
}