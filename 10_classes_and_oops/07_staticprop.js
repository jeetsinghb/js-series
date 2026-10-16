// static

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const joe = new User('Joe');
joe.logMe() // Username: Joe

// console.log(joe.createId()); // TypeError: joe.createId is not a function -> If static keyword is used

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const person1 = new Teacher('Jacob', 'jacob22@teach.io')

console.log(person1); // Teacher { username: 'Jacob', email: 'jacob22@teach.io' }
person1.logMe(); // Username: Jacob

// console.log(person1.createId()); // TypeError: person1.createId is not a function -> If static keyword is used
