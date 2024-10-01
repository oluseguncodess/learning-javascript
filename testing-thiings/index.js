class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if(typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstname = newFirstName;
        }
        else {
            console.error("Firstname must be a string!")
        }
    }

    set lastName(newLastName) {
        if(typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Lastname must be a string!")
        }
    }

    set age(newAge) {
        if(typeof newAge === "number" && newAge > 0) {
            this._age= newAge;
        }
        else {
            console.error("Age must be a number!")
        }
    }

}

const person = new Person ("Olusegun", "Bamgbelu", 23);
console.log(person);