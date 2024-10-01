//learning about js objects through w3schools.

//first class - tuesday

//creating a constructor function - a template for creating new objects of the same type(this means that has the same properties and values)
function Person(firstName, last, age, eye) {
    this.firstName = firstName;
    this.last = last;
    this.age = age;
    this.eye = eye;
    this.eyeColor = function() {
        console.log(`${this.firstName}'s eye color is ${this.eye}`);
    } 
}

//creating multiple objects from the constructor function
const sade = new Person("Sade", "Adeparusi", "50", "Black");
const peter = new Person('Peter', 'Parker', '27', 'Green');

//let's create a sentence with both properties in the new created objects

// logging out the sentence 👇🏾  - to log out, add a console.log - success ✅
(`${sade.firstName} is ${sade.age} years old while ${peter.firstName} is ${peter.age} years old`);
// Output - Sade is 50 years old while Peter is 27 years old

//calling a function - call by adding ()
sade.eyeColor;
peter.eyeColor;

//Object Prototypes

//Creating a new default property in the Person object constructor - the prototype method enables us to create new properties in a object prototype.
Person.prototype.nationality = "English";

// log out sade object property nationality to see - success ✅
(sade.nationality);

//To see the prototype property, you need to use a specific method

//this Object method give's all prototypes of an object - log it to see - success ✅
(Object.getPrototypeOf(sade));

// ****** Object Methods *** //

//Object.assign() method - this is used to assign the properties of a source object to a target object.

// let's make a target object (object to be changed)
const person1 = {
    firstName: 'Olusegun',
    lastName: 'Bamgbelu', 
    age: 23,
    gender: 'Male',
    nationality: 'Nigeria',
    occupation: 'Student'
}

// let's make a source object (object to be modelled)
const person2 = {
    nationality: 'UAE',
    occupation: 'Software Engineer'
}

// now let's assign the source object to target object using the Object.assign(target, source)
 Object.assign(person1, person2)

// log out the target object to see it's updated properties - success ✅


// Object.entries() method 
console.log(Object.entries(person1));
 