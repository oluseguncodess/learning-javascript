// Generate Random Numbers for each cards
// let secondCard = Math.floor(Math.random() * 10) + 1;
// let firstCard = Math.floor(Math.random() * 10) + 1;


let firstCard = 10;
let secondCard = 17;
let sum = firstCard + secondCard;
console.log(sum);
let hasBlackJack = false;
let isAlive = true;
let message;


//Generate the logic for the game using if / else statements
if(sum < 21) {
    message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
} else {
    message = "You're out of the game! 😭";
    isAlive = false;
}

console.log(message);







