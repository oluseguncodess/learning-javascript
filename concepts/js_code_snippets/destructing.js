//Destructing Objects
const test = {
    first: "Olusegun", 
    second: "Deborah",
    third: "Issac"
}

function see({first, second, third}) {
    console.log(`${first} kissed ${second} and ${third} was upset because she was his crush`);
}

// run code to see results
// see(test);

// Object length

// run to see results
// console.log(Object.keys(test).length)

// looping through an object - use for in loop
for (let obj in test) {
    console.log(test[obj]);
};




