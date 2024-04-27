let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message;
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");


//Create a function the starts the game
function startGame() {
    isAlive = true;

    //Generate random numbers 
    let secondCard = getRandomCard();
    let firstCard = getRandomCard();

    //reassign the sum and cards variables 
    cards = [firstCard, secondCard];
    console.log(cards);
    sum = firstCard + secondCard
    renderGame();
}


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
   
    return randomNumber === 1 ? 11 : 
    (randomNumber >= 11 && randomNumber <= 13) ? 10 :
    randomNumber;
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
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
    
        cards.push(newCard)

        sum += newCard

        renderGame();
    }
}









