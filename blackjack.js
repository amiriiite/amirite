let firstCard = 7;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
function startGame(){
    cardsEl.textContent = "Cards: " + firstCard + " - " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        messageEl.textContent = message;
    }
    else if (sum === 21) {
        message = "You've got Blackjack!";
        messageEl.textContent = message;
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game!";
        messageEl.textContent = message;
        isAlive = false;
    }
}
function newCard(){
    console.log("Drawing a new card from the deck")
    let cardNew = 3;
    sum += cardNew;
    startGame();
}