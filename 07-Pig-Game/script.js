"use strict";

// DOM element declaration
const player0element = document.querySelector(".player--0");
const player1element = document.querySelector(".player--1");
const player0score = document.getElementById("score--0");
const player1score = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newBtn = document.querySelector(".btn--new");
const dice = document.querySelector(".dice");

// Variable declaration
let currentScore, currentPlayer, playerScores, playing;

// Function declaration
const initGame = function () {
  currentScore = 0;
  currentPlayer = 0;
  playerScores = [0, 0];
  playing = true;

  player0score.textContent = 0;
  player1score.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  dice.classList.add("hidden");
  player0element.classList.remove("player--winner");
  player1element.classList.remove("player--winner");
  player0element.classList.add("player--active");
  player1element.classList.remove("player--active");
};

const switchPlayer = () => {
  currentScore = 0;
  displayCurrent();
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0element.classList.toggle("player--active");
  player1element.classList.toggle("player--active");
};

const displayCurrent = () => {
  document.getElementById(`current--${currentPlayer}`).textContent =
    currentScore;
};

// Game play initialisation and execution
initGame();

rollBtn.addEventListener("click", function () {
  if (playing) {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    dice.src = `images/dice-${diceRoll}.png`;
    dice.classList.remove("hidden");

    if (diceRoll != 1) {
      currentScore += diceRoll;
      displayCurrent();
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (playing) {
    playerScores[currentPlayer] += currentScore;

    document.getElementById(`score--${currentPlayer}`).textContent =
      playerScores[currentPlayer];

    if (playerScores[currentPlayer] >= 20) {
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
      dice.classList.add("hidden");
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

newBtn.addEventListener("click", initGame);
