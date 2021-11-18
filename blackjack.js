let player = {
  name: "Per",
  chips: 200,
};

let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("heading");
let sumEl = document.querySelector(".Sum");
let CardsEl = document.querySelector(".cards");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  let firstCard = getRandomcard();
  let secondCard = getRandomcard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  hasBlackJack = false;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum:" + sum;
  CardsEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    CardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card2 = getRandomcard();
    sum += card2;
    cards.push(card2);
    renderGame();
  }
}

function getRandomcard() {
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
  }
}
