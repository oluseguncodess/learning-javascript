class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const Person1 = new Person("Jack Sparrow", 50, "142 st", "Falaacy", "Int rigths");

console.log(Person1.address.street);
