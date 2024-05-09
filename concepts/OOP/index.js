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

// let User = class {
//     constructor(name, pswd, role) {
//         this.name = name
//         this.password = pswd
//         this.role = role
//     }

//     set setPassword(val) {
//         if (val.length < 5) {
//             console.log("You need a least 5 characters");
//         } else {
//             this.password = val;
//         }
//     }   
// }

// let john = new User ("John", "1234rh", "admin");
// console.log(john);

// john.setPassword = "rtcyuuu";
// console.log(john);


//Inheritance between function constructors 

//create a person construtor function
// let Person = function(name, gender, birthYear) {
//     this.name = name
//     this.gender = gender
//     this.birthYear = birthYear
// }

// Person.prototype.calcAge = function() {
//     let age = new Date().getFullYear() - this.birthYear;
//     console.log(age);
// }

// //create an instance 
// let john = new Person("John", "Male", 2001);
// console.log(john);

// //create an Employee constructor function

// let Employee = function(name, gender, birthYear, empId, salary) {
//     Person.call(this, name, gender, birthYear);
//     this.empId = empId
//     this.salary = salary
// }

// Employee.prototype = Person.prototype;

// Employee.prototype.calcSalary = function() {
//      return this.salary * 12;
// }

// Employee.prototype.empDetails = function() {
//     console.log(this.name);
//     console.log(this.empId);
// }
// let mark = new Employee("Mark", "Male", 1999, 100, 12000);
// console.log(mark);

//INHERITANCE BETWEEN CLASSES 

class Person {
    constructor(name, birthYear, gender) {
        this.name = name
        this.birthYear = birthYear
        this.gender = gender
    }
    calcAge() {
        console.log(new Date().getFullYear - this.birthYear);
    }
}

class Employee extends Person {
    constructor(name, birthYear, gender, empId, salary) {
        super(name, birthYear, gender);
        this.empId = empId
        this.salary = salary
    }
    calcSalary() {
        return this.salary * 12
    }

    empDetails() {
        console.log(this.name);
        console.log(this.empId);
    }
}

let mark = new Employee('mark', 1995, "Male", 150, 20000);
console.log(mark);
