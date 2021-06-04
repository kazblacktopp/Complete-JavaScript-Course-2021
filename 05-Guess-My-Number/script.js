"use strict";

// DOM elements
const guess = document.querySelector(".guess");

// State variables
let randNumber = randomNumber();
let currentScore = 20;
let highscore = 0;

// Functions
function randomNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

function setTextContent(className, value) {
  document.querySelector(className).textContent = value;
}

function eventListener(className, action, functionName) {
  const selector = document.querySelector(className);
  action === "add"
    ? selector.addEventListener("click", functionName)
    : selector.removeEventListener("click", functionName);
}

function editClassList(selector, editType, className) {
  const element = document.querySelector(selector);
  editType === "add"
    ? element.classList.add(className)
    : element.classList.remove(className);
}

function checkGuess() {
  const currentGuess = Number(guess.value);
  if (currentGuess === randNumber) {
    setTextContent(".message", "🎉 Correct Number!");
    editClassList("body", "add", "bg-color");
    setTextContent(".number", randNumber);
    editClassList(".number", "add", "win-box");
    if (currentScore > highscore) {
      setTextContent(".highscore", currentScore);
      highscore = currentScore;
    }
  } else {
    if (currentScore > 1) {
      if (!currentGuess) {
        setTextContent(".message", "⛔️ No number!");
      } else {
        setTextContent(
          ".message",
          currentGuess < randNumber ? "📉 Too low!" : "📈 Too high!"
        );
      }
    } else {
      setTextContent(".message", "💥 You lost the game!");
      eventListener(".check", "remove", checkGuess);
    }
    currentScore--;
    setTextContent(".score", currentScore);
  }
}

function gameReset() {
  randNumber = randomNumber();
  currentScore = 20;
  editClassList("body", "remove", "bg-color");
  setTextContent(".number", "?");
  editClassList(".number", "remove", "win-box");
  setTextContent(".message", "Start guessing...");
  setTextContent(".score", currentScore);
  guess.value = "";
  eventListener(".check", "add", checkGuess);
}

// Event listener for user input
eventListener(".check", "add", checkGuess);

// Reset game when 'Again' button clicked
eventListener(".again", "add", gameReset);
