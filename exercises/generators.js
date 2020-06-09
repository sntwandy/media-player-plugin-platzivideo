function* simpleGenerator() {
    console.log('Generator Start');
    yield;
    console.log('Generator End');
};

const gen = simpleGenerator();

gen.next();
gen.next();

function* idMaker() {
    let id = 1;
    while(true) {
        yield id;
        id++;
    };
};

const genId = idMaker();


function* idMakerWithReset() {
    let id = 1;
    let reset;
    while(true) {
        reset = yield id;
        if(reset) {
            id = 1;
        } else {
            id++;
        }
    };
};


function* fibonacci() {
    let a = 1;
    let b = 1;

    while(true) {
        const nextNumber = a + b;
        a = b;
        b = nextNumber;
        yield nextNumber;
    };
};

const gen3 = fibonacci();