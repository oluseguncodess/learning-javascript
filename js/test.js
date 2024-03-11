// WE TEST OUT OUR CODE HERE!!! DO ALL YOUR CONSOLE LOGGING HERE!!!

// CREATING AN OBJECT 

let person = {
name: "John",
age: 12,
friends: ["Jake", "Jason", "Sandra", "Caleb", "Anne", "Josh"]
};

// ACCESSING OBJECT PROPERTIES

//Using dot notation

let nameDot = person.name;
console.log(nameDot); // output == John

//Using bracket notation. 

let school = {
name: "University of Lagos",  
"weather report": "Sunny 🌞", //Two separate words as property name
faculty: "Engineering",
"number of students": 305 //Two separate words as property name
};

//ACCESS OBJECT PROPERTY

let weatherReport = school["weather report"]; 
console.log(weatherReport); //expected output - Sunny 🌞

/*
NOTE - The property name can be indented if it's two separate words
however, you'll need to use the bracket notation to access the property value
*/

//UPDATE OBJECT PROPERTIES 

//Change the 'weather report' property value to 'Windy 💨'

weatherReport = "Windy 💨"; // reassign weatherReport variable
console.log(weatherReport); //expected output - Windy 💨