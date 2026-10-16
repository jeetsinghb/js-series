// inheritance

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USSERNAME IS: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, password, email) {
        super(username) // this
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher('robin', '12345', 'robin@teacher.io')

const user1 = new User('jack')

teacher1.addCourse() // A new course was added by robin
teacher1.logMe() // USERNAME IS: robin

// user1.addCourse() // TypeError: user1.addCourse is not a function

user1.logMe() // USERNAME IS: jack


console.log(teacher1 === user1); // false

console.log(teacher1 === Teacher); // false

console.log(teacher1 instanceof Teacher); // true

console.log(teacher1 instanceof User); // true
