"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".guess").value);

  if (!guessedNumber) {
    document.querySelector(".message").textContent = "❌ Input valid number!";
  } else if (guessedNumber === secretNumber) {
    document.querySelector(".message").textContent =
      "🏆 You guessed secret number!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessedNumber > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬇️ Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😞 You lost game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessedNumber < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆️ Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😞 You lost game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
