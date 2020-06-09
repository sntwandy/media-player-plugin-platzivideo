console.log('Hello, TypeScript');

function add(a: number, b: number) {
    return a + b;
}

const sum = add(5, 2);
console.log(sum);

// Boolean
let muted: boolean = true;
muted = false;

// Numbers
let num1: number = 17;
let num2: number =  10;
let result = num1 * num2;

// Strings
let userName: string = 'Megan';
let greeting = `Hey, my name is ${userName}`;

// Arrays
let people: string[] = [];
people = ['Megan', 'Darcy', 'Zeus', 'Atenas', 'Wandy'];

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Megan', 17, 'Darcy', 24);

// Enums
enum Colors {
    red = 'Red',
    green = 'Green',
    black = 'Black',
    yellow = 'Yellow',
    blue = 'Blue',
};

let favoriteColor: Colors = Colors.black;
console.log(`My favorite color is: ${favoriteColor}`);

// Any
let comodin: any = 'Megan';
comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };

// Functions
function add2(a: number, b: number): number {
    return a + b;
};

const sum2 = add2(4, 8);

function createAdder(a: number): (number) => number {
    return function (b: number): number {
        return b + a;
    };
};

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Bartolome'): string {
    return `${firstName} ${lastName}`;
};

const darcy = fullName('Darcy');
console.log(darcy);

// Interfaces
interface Reactangule {
    width: number,
    height: number,
};

let rect: Reactangule = {
    width: 10,
    height: 13,
};

function area(r: Reactangule): number {
    return r.width * r.height;
};

const areaRect = area(rect);
console.log(areaRect);