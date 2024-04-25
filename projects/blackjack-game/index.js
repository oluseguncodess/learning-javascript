// Generate Random Numbers for each cards
// let secondCard = Math.floor(Math.random() * 10) + 1;
// let firstCard = Math.floor(Math.random() * 10) + 1;


let firstCard = 10;
let secondCard = 17;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;
let messageEl = document.querySelector("#message-el");

let sumEl = document.querySelector("#sum-el")

//Create a function the starts the game
function startGame() {
//Generate the logic for the game using if / else statements

    //Render the sum of the first and second card.
    sumEl.textContent += ` ${sum}`;

    if(sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
        messageEl.textContent = message;
}









