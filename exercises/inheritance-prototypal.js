function Person(name) {
    // const person = Object.create(Person.prototype);
    this.name = name;

    // return this;
};

Person.prototype.greeting = function () {
    console.log(`Halo new: ${this.name}`);
};

const megan = new Person('Megan');

// Instance properties
console.log(`Name: ${megan.name}`);

// Class properties
console.log(`Greeting: ${megan.greeting}`);

// Properties inheritanced example: toString()
console.log(`toString: ${megan.toString}`);

// hasOwnProperty
console.log(`megan.hasOwnProperty("name") ${megan.hasOwnProperty('name')}`);
console.log(`megan.hasOwnProperty("greeting") ${megan.hasOwnProperty('greeting')}`);