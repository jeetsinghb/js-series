/**
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states
 * 
 * Pending: The task is in the initial state.
 * Fulfilled: The task was completed successfully, and the result is available.
 * Rejected: The task failed, and an error is provided.
 * 
 @ RESOURCES:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * https://www.geeksforgeeks.org/javascript/javascript-promise/
 */

// Exercise 1:

// callback
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is completed');
        resolve(); // required to be consumed in .then
    }, 1000)
})

promiseOne.then(function () {
    console.log('Promise consumed');
    console.log('-----');
})


// Exercise 2:

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve();
    }, 1000)
}).then(function () {
    console.log('Async 2 resolved');
    console.log('-----');
})


// Exercise 3:

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "dominic", email: "example@gmail.com" });
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})


// Exercise 4:

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;

        if (!error) {
            resolve({ username: "joe", pass: "1234" })
            console.log('-----');
        } else {
            reject('ERROR: Something went wrong');
            console.log('-----');
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username; // required or 'undefined'
})
    .then((username) => {
        console.log('username is:', username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log('--- The promise is either resolved or rejected ---'))


// Exercise 5:

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "12345" })
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000)
})

async function consumePromiseFive() {
    // const response = await promiseFive
    // console.log(response);
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// Exercise 6:

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('E:', error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => console.log(data)) // then-able
    .catch((err) => console.log('Error:', err))
