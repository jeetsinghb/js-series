/**
 * window -> this = window
 * node -> {} // empty object, no window object
 */

function setUsername(username) {
    // Complex DB Calls
    this.setUsername = username;
    console.log("called");
}

function createUsername(username, email, password) {
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUsername('chai', 'chai@dev.com', '12345')

console.log(chai);