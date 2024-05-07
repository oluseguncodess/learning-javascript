//Learning Object Oriented Programming!
// let Person = function(name, gender, birthYear) {
//     this.name = name,
//     this.gender = gender,
//     this.birthYear = birthYear
// }

// //create a function that calculates the age of a person and
// //pass in this function into the Person constructor function as an method

// Person.prototype.calcAge = function() {
//    let age = new Date().getFullYear() - this.birthYear;
//     // console.log(age);
// }

// // create an object 
// let john = new Person("John", "Male", 2001);
// john.calcAge()
// console.log(john);

//Javascript class

class Human {
    constructor(name, birthYear, gender) {
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;
    }

    calcAge(){
            console.log(new Date().getFullYear() - this.birthYear)
        }
    }



let john = new Human("John", 2001, "Male");

console.log(john);

let mary = new Human("Mary", 1995, "Female");

console.log(mary);
