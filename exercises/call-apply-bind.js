// this

// Using call and arguments

console.log("*****Using Call*****");

function gretting() {
    console.log(`Hi, I am ${this.name} ${this.lastName}`);
};

const megan = {
    name: "Megan E.",
    lastName: "Herrera Capellan",
};

gretting.call(megan);

function walk(meters, direction) {
    console.log(`${this.name} walks ${meters} meters to ${direction}`);
}

walk.call(megan, 100, "Home");

// Usign apply and arguments

console.log("*****Using Apply*****");

const values = [300, "Work"];
walk.apply(megan, values);

// Using bind and arguments

const darcy = {name: "Darcy", lastName: "Bartolome"};

const darcyGretting = gretting.bind(darcy);
darcyGretting();

const darcyWalk = walk.bind(darcy);
darcyWalk(540, "eat");
// const darcyWalk = walk.bind(darcy, 140, 'eat');
// darcyWalk();


// Using buttons from the DOM

const buttons = document.getElementsByClassName("call-to-action");

/* buttons.forEach( button => {
    button.onclick = () => alert('Never stop learning!!');
}); */

// nodelist
Array.prototype.forEach.call(buttons, button => {
    button.onclick = () => alert('Never stop learning!!');
});