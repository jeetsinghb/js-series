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
        } else {
            reject('ERROR: Something went wrong');
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
    .finally(() => console.log('The promise is either resolved or rejected'))


// Exercise 5:

// const promiseFive = new Promise(function(resolve, reject){

// })