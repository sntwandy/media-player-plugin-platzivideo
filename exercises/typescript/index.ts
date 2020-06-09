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