class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hello I am ${this.name}.`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription()
        if (this.hasMajor()) {
            description += ` ${this.name} is a ${this.major} student.`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGreeting() {
        let greeting = super.getGreeting()
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`
        }
        return greeting
    }
}

const me = new Traveler('Paul Shaw', 55, 'London')
console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())