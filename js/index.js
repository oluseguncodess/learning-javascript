// All I learnt in the basic Javascript Course on FreeCodeCamp Website
// variables 

// Variables are ued to store data. Examples are below;

// this is a variable that can be re-assigned
let cake = "strawberry";

// 
var name = "name"; 

// const is used for variables that are not going to be reassigned.
const habitablePlanet= "earth"; 

/* 
Mathetimatical expressions

=== same as
= assignment operator
+  addition
- subtraction
* multiplication
/ division
% - modulus

Tertiary Operators - if...else statements in one line
condition ? IfExpressionIsTrue : If ExpressionIsFalse 

Logical Operators. 

|| - OR
&& - AND

Loops 
Loops are used to perform task over an iteration.

For loops are used to perform a task a specific amount of time and while loops are used to perform a tasks until a condition is met

e.g for loop - for (a; b; c;) {
    where a is intialization, b is condition, c is final expression.

} --- while loop - while () {}

*/

// Arrays 
// Arrays are used to store/hold multiple values

let order = ["first_value", "second-value", "third_value"];
order.length; // -- find out the number of items in an array.
order.push(); // -- add new items to an array
order.shift(); // This takes the element in an array
order.pop(); // removes the element and returns the value
order.includes(); // checks to see if there a value in an array
// HTML DOM
// This stands for 'Document Object Model'. It's a way of accessing html elements using Javascript

// Console Log

// This is used to display results on the console. 

// console.log (name);

// functions 

// Functions are tools that allows you to run sections of code at specific times

function functionName(params) {
    
}

// Note - functions can get hoisted to the top to be used even though they don't 
// follow the usual control flow!

// comments - this is commenting out code so it's not viewed as code by the editor
// /* */ - is used to comment out multiple lines of code.
/*
Properties in Javascript 
This are used to perform specific task based on a action. 
*/

/*
List of functions include;
1. Onclick Property - used to detect a click. */
// e.g value.onclick = action to be carried out 
// 2.) innerText - used to access or change the text of a selected element 


// Escape character code
// backslash - used to write double quotes in a string


//Objects - these are used t store/hold multiple values that can be gotten through a property and a key.  
const footballer = {
    name: "Ade",
    age: 28,
    height: 5.5
}

// Conditionals in Javascript.

// These are if/else statements used to choose between two options based on a condition. 

// concatenation
// This is joining together of words to form a sentence

// Variable assignemnts 
//  You can reassign values of variables and can increment or decrement variable values
let money = 100;

// reassign value
money += 5; // money = 105

// increment and decrement
// decrement
money --; // money = 99 

// increment
money ++; // money = 100


var age = 12;
var username = "blaze";

// console.log("Hey guys, i'm " + age + " years old. My username is " + username);






// I KNOW IT SEEMS LIKE I'M CRAZY BUT I'LL GET BETTER AT DOCUMENTING 😂
// FREECODECAMP BEGINNER JAVASCRIPT COURSE 

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
    
    //Add properties to objects 
    
    // Using the dot notation
    school.location = "Akoka, Lagos";
    console.log(school); // show newly added property
    
    // using bracket notation
    school["gpa"] = 3.0;
    console.log(school);
    
    // delete properties 
    // use the delete keyword
    delete school["gpa"];
    console.log(school);









