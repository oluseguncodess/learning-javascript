let person = { };

Object.defineProperties(person, {
    name: {
        value: "Olusegun Bamgbelu",
        enumerable: true            
    }, 
    age: {
        value: 23,
        writable: true,
        enumerable: true        
    }, 
    job: {
        value: "programmer",
        writable: true,
        enumerable: true       
    },
    sayThis: {
        value: function() {
            console.log(`${this.name} is a ${this.age} years old ${this.job}`)
        },
        enumerable: true
    }
        
});

person.name = "Jack Sparrow"
console.log(person);






