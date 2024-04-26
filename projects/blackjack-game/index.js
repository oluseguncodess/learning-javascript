// Generate Random Numbers for each cards
// let secondCard = Math.floor(Math.random() * 10) + 1;
// let firstCard = Math.floor(Math.random() * 10) + 1;


let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber >= 11){
        return 10;
    }

}

//Create a function the starts the game
function startGame() {
    renderGame();
}

function renderGame() {
//Generate the logic for the game using if / else statements

    //Render the sum of the first and second card.
    sumEl.textContent = ` Sum: ${sum}`;

    //display the both cards 
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";    
    }

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

//create a function for the new card button 

function newCard() {

    let newCard = getRandomCard();
    
    cards.push(newCard)

    sum += newCard

    renderGame();

}









