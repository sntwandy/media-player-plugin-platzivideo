/* Inefficient

const megan = {
    name: 'Megan E.',
};

megan.greeting = function () {
    console.log(`Hi, I am ${this.name}`);
};

megan.greeting();

const darcy = {
    name: 'Darcy B.',
};

darcy.greeting = function () {
    console.log(`Hi, I am ${this.name}`);
};

darcy.greeting();
*/
// Efficient

/* function Person(name) {
    const person = {
        name: name,
    };

    person.greeting = function () {
        console.log(`Heyyy!, I am ${this.name}`);
    };

    return person;
};

const megan = Person('Megan');
const darcy = Person('Darcy');

megan.greeting();
darcy.greeting();
*/
// Efficient other way:

/* const personMethods = {
    greeting: function () {
        console.log(`Hiii, ${this.name}`);
    },
};

function Person(name) {
    const person = {
        name: name,
    };

    person.greeting = personMethods.greeting;

    return person;
};

const megan = Person('Megan');
const darcy = Person('Darcy');

megan.greeting();
darcy.greeting();
*/

// Using object.create

/* const personMethods = {
    greeting: function () {
        console.log(`Its me, ${this.name}`);
    },
};

function Person(name) {
    const person = Object.create(personMethods);
    person.name = name;

    person.greeting = personMethods.greeting;

    return person;
};

const megan = Person('Megan');
const darcy = Person('Darcy');

megan.greeting();
darcy.greeting();
*/

// Using prototype to create methods

/* function Person(name) {
    const person = Object.create(Person.prototype);
    person.name = name;

    return person;
};

Person.prototype.greeting = function () {
    console.log(`Halo, ${this.name}`);
};

const megan = Person('Megan');
const darcy = Person('Darcy');

megan.greeting();
darcy.greeting();
*/

// Using new, sugar syntax

function Person(name) {
    // const person = Object.create(Person.prototype);
    this.name = name;

    // return this;
};

Person.prototype.greeting = function () {
    console.log(`Halo new: ${this.name}`);
};

const megan = new Person('Megan');
const darcy = new Person('Darcy');

megan.greeting();
darcy.greeting();