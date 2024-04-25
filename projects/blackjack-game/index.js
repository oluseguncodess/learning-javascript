// Generate Random Numbers for each cards
// let secondCard = Math.floor(Math.random() * 10) + 1;
// let firstCard = Math.floor(Math.random() * 10) + 1;


let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");


//Create a function the starts the game
function startGame() {
    renderGame();
}

function renderGame() {
//Generate the logic for the game using if / else statements

    //Render the sum of the first and second card.
    sumEl.textContent = ` Sum: ${sum}`;

    //display the both cards 
    cardsEl.textContent = ` Cards: ${cards[0]} ${cards[1]}`;

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
    console.log("Drawing a new card from the deck");

    let newCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
    
    cards.push(newCard)

    sum += newCard

    renderGame();

    //display the randomly generated card
    let cardd = [];
    for (let i = 0; i < cards.length; i++) {
        cardd.push(cards[i]);
    }
    let cardToString = cardd.join(' ');
    cardsEl.textContent = `Cards: ${cardToString}`;

}









