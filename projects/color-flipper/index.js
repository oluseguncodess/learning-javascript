// Here is where we test, debug and console log our javascript code!!!

// Make an array of both letters and numbers
const array = [1, 2, 3, 4, 5, "A", "B", "C", "D"];

// Access the click me button to perform an action
const button = document.querySelector(".btn");

// Access the color hex color value
const color = document.querySelector(".color");

// Access the header to change it's background color
debugger;
const header = document.getElementsByClassName("header");

// Create a function to generate random numbers 
function randomGenerator() {
    return Math.floor(Math.random() * array.length) ; 
}

// Add an event listener to the click me button 
button.addEventListener("click", function() {
    
    // Create a variable to store the randomly generated hex code value
    let hexCode = "";

    // Create a for loop to go through the array 
    // to randomly pick values and store them in the hex code variable. 
    for( i = 0; i < 6; i++) {
        hexCode += array[randomGenerator()];    
   }
    // Change the hex code to the generated values
     color.textContent = hexCode


});