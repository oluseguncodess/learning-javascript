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
// class Human {
//     constructor(name, birthYear, gender) {
//         this.name = name;
//         this.gender = gender;
//         this.birthYear = birthYear;
//     }
//     calcAge(){
//             console.log(new Date().getFullYear() - this.birthYear)
//         }
//     }

// let john = new Human("John", 2001, "Male");
// console.log(john);

// let mary = new Human("Mary", 1995, "Female");
// console.log(mary);

// let john = {
//     name: "John",
//     birthYear: 2001,
//     salary: 12000,

//     get getName() {
//         return this.name;
//     } ,

//     set setName(value) {
//         this.name = value
//     }
// }

// console.log(john.getName);
// john.setName = "Olusegun";
// console.log(john.getName);

let User = class {
    constructor(name, pswd, role) {
        this.name = name
        this.password = pswd
        this.role = role
    }

    set setPassword(val) {
        if (val.length < 5) {
            console.log("You need a least 5 characters");
        } else {
            this.password = val;
        }
    }   
}

let john = new User ("John", "1234rh", "admin");
console.log(john);

john.setPassword = "rtcyuuu";
console.log(john);
