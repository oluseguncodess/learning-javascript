// Day 1 of 100 Days Of Code (Javascript)

/* */

// COMMENTING OUT CODE

// Single-line code - //
// multiple-line code - /* */

/* 
CONSOLE LOG - displays specified data on the console. 
e.g console.log(data); //displays data in the console
*/

// VARIABLES
/* 
You store data using a variable.

There are 3 ways to declare a variable - let, const, var.

You can assign data to variables. The let variable is a scope level variable 
(specified in a block, can only be used in that block)

e.g let name; // UNASSIGNED VARIABLE
let name = "name"; // ASSIGNED VARIABLES

The const variable is mainly used for assignment variables that won't or 
should'nt be changed.
e.g const pi; // UNASSIGNED VARIABLE
const pi = 3.14; // ASSIGNED VARIABLES

The var variable works just like the let variable but is a global scope variable
(specified in a block, can be used outside the block.)
e.g var school; // UNASSIGNED VARIABLE 
var school = "school"; // ASSIGNED VARIABLES
*/

// DAY 2 OF #100DaysOfCode

/* 
ACCESSING INDIVIDUAL STRINGS IN A VARIABLE

// We access these by using bracket notation

var firstName = "Olusegun";

// To access the first letter
var firstLetter = firstName[0];//In programming, instead of counting from 1, we count from 0 (Zer0-index)
console.log(firstLetter);

// To access the last letter
var lastLetter = firstName[firstName.length - 1] // minus because we count from zero not one
console.log(lastLetter);

// ARRAYS 

// They allow you store multiple values. These values could be different data types
var fruits = ["Orange", 23, "Banana", 64];

// Values in arrays can be accessed using bracket notation.
var numbers = [50, 60, 70];
numbers[0]; // 50

// We can modify values in arrays using bracket notation
var numbers = [50, 60, 70];
numbers[1] = 55;
console.log(numbers[1]); // 50
*/


//FUNCTIONS 

/* 
Functions allow use to create reuseable code 

// CREATING A FUNCTION
function nameOfFunction (parameter) {
    // CODE
}

// CALLING A FUNCTION
nameOfFunction();

//PARAMETERS
They are variables that act as placeholders for the values that are to be inputted in a function when it is called

e.g //CREATE FUNCTION
function nameOfFunction(parameter) {
    console.log("My name is " + parameter);
}

// CALL FUNCTION
nameOfFunction("olusegun");

// GLOBAL SCOPE AND FUNCTIONS
Scopes are the visibility of variables 

 Global scopes means variables can be seen in your javascript code. 
 Local scopes means variables that are only seen and accessed in a particular portion of your code.

// Global scope and local scope

Examples;
let fruit = "Pineapple"; // The variable 'fruit' here is a global variable.

function fruits() {
    let fruit = "Strawberry"; // The variable 'fruit' here is a local variable

    return fruit; // returns the local variable to the function
}

console.log(fruits()); // returns the local variable(fruit) with value of "Pineapple"
console.log(fruit); // displays global variable(fruit) with the value of "Strawberry"

*/

//SIGN AND CONDITIONALS 

/* 
Conditionals are a way to check if a statement is true or not

if (statement) {
    output code/action to carry out
} else {
    output code/ action to carry out
}

// SWITCH STATEMENTS 

switch (expression) {
  case value1:
    // code block executed if expression === value1
    break;
  case value2:
    // code block executed if expression === value2
    break;
  // More cases can be added as needed
  default:
    // code block executed if expression does not match any case
}


//SIGNS
= assignment operator - this assigns a value to a variable
== equality opertor - this compares a value to another
=== strict equality operator - this strictly compares a value to another
&& AND Operator
|| OR Operator
*/

// JAVASCRIPT OBJECTS

/*
Javascript objects are used to store data. They are like arrays 
except you use properties rather than index's to access data.

e.g;
const objectName = {
  key1: value1,
  key2: value2,
  // Additional key-value pairs
};

// Delete properties - use the delete word and the property name 

*/ 

// LOOPS

/*loops are a way you can iterate through data till a specific condition is met

//Types of loops
a.) while loops 
b.)For loops 

*/



// JAVASCRIPT METHODS
/*
.length - used to determine the length of data/ number of items in an array
e.g var food = "egusi";
console.log(food.length); - display of 4 in the console
hasOwnProperty() - used to check if an object has a property.
*/

// JAVASCRIPT FUNCTIONS 
/*
array.push() - pushes a value to an array
array.pop() - removes the last value in an array and returns it
array.includes() - checks an array to see if a specified value is in there
array.shift() - removes the first element in an array
e.g var array = [["Name", "Olusegun"], ["Age", 22], ["Height", 5.9]];
var remove_element = array.shift();
console.log(remove_element);
array.unshift() - adds an element to the beginning of an array.
*/





