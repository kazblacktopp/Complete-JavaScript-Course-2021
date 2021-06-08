"use strict";

// Pre-defined elements
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

// Game variables
let currentScore0 = 0;
let currentScore1 = 0;
let player0score = 0;
let player1score = 0;

// Exectute game
newGame();

// Game fuctions

function newGame() {
  currentScore0 = 0;
  currentScore1 = 0;
  player0score = 0;
  player1score = 0;
  current0Element.textContent = "0";
  current1Element.textContent = "0";
  score0Element.textContent = "0";
  score1Element.textContent = "0";
  diceElement.classList.add("hidden");
  if (!player0.classList.contains("player--active")) {
    player1.classList.remove("player--active");
    player1.classList.remove("player--winner");
    player0.classList.add("player--active");
  } else {
    player0.classList.remove("player--winner");
  }
  document.querySelector(".btn--roll").addEventListener("click", randNumGen);
  document.querySelector(".btn--hold").addEventListener("click", holdScore);
  document.querySelector(".btn--new").addEventListener("click", newGame);
}

function randNumGen() {
  const randNum = Math.floor(Math.random() * 6 + 1);
  if (randNum === 1) {
    changePlayer();
  } else {
    addScore(randNum);
  }
  displayDice(randNum);
}

function displayDice(randNum) {
  const diceImg = `images/dice-${randNum}.png`;
  diceElement.src = diceImg;
  diceElement.classList.remove("hidden");
}

function addScore(num) {
  if (player0.classList.contains("player--active")) {
    currentScore0 += num;
    current0Element.textContent = currentScore0;
  } else {
    currentScore1 += num;
    current1Element.textContent = currentScore1;
  }
}

function holdScore() {
  if (player0.classList.contains("player--active")) {
    player0score += currentScore0;
    score0Element.textContent = player0score;
    checkScore(player0score);
  } else {
    player1score += currentScore1;
    score1Element.textContent = player1score;
    checkScore(player1score);
  }
}

function checkScore(playerScore) {
  if (playerScore >= 100) {
    console.log(`Player Wins!`);
    endGame();
  } else {
    changePlayer();
  }
}

function changePlayer() {
  if (player0.classList.contains("player--active")) {
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
    currentScore0 = 0;
    current0Element.textContent = currentScore0;
  } else {
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    currentScore1 = 0;
    current1Element.textContent = currentScore1;
  }
}

function endGame() {
  if (player0.classList.contains("player--active")) {
    player0.classList.add("player--winner");
  } else {
    player1.classList.add("player--winner");
  }
  document.querySelector(".btn--roll").removeEventListener("click", randNumGen);
  document.querySelector(".btn--hold").removeEventListener("click", holdScore);
  diceElement.classList.add("hidden");
}
