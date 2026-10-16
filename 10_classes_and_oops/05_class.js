// ES6

// Classes / Class

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // custom methods

    encryptPassword() {
        return `${this.password}_abc`
    }

    changeCase() {
        return `${this.username.toUpperCase()}`
    }
}

const coffee = new User('developer', 'dev@google.com', '12345');

console.log(coffee.encryptPassword()); // 12345_abc
console.log(coffee.changeCase()); // DEVELOPER


console.log('-----');

// Behind the scene

function newUser(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

newUser.prototype.encryptPassword = function () {
    return `${this.password}_abc`
}

newUser.prototype.changeCase = function () {
    return `${this.username}`
}

const adam = new newUser('chai', 'chai@gmail.com', '4456')

console.log(adam.encryptPassword());
console.log(adam.changeCase());
