"use strict";
let random = Math.floor(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

let body = document.querySelector("body");
let secret = document.querySelector(".secret");
let guess = document.querySelector("#guessNumber");
let message = document.querySelector(".message");
let checkBtn = document.querySelector(".check");
let scoreHtml = document.querySelector(".score");
let highScoreHtml = document.querySelector(".high-score");
let again = document.querySelector(".again");

checkBtn.addEventListener("click", check);

// when press check button
function check() 
{
  console.log(random, guess.value);

  if (Number(guess.value) == "") {
    message.textContent = "⛔Empty Not Allowed";
  } 
  else if (Number(guess.value) == random) 
  {
    message.textContent = "🏆Correct Number!";
    body.style.background = "green";
    secret.textContent = random;
    secret.style.width = "120px";
    secret.style.height = "40px";
    guess.style.background = "green";

    if (score > highScore) 
    {
      highScore = Number(scoreHtml.textContent);
      highScoreHtml.textContent = highScore;
    }
    return;
  } 
  else if (Number(guess.value) < random) 
  {
    message.textContent = "📉Guess is too low";
    scoreHtml.textContent = score--;
  } 
  else 
  {
    message.textContent = "📈Guess is too high";
    scoreHtml.textContent = score--;
  }

  checkBtn.addEventListener("click", check);
}

//when press again button the value is reset to first template
function reset() {
  random = Math.floor(Math.random() * 20 + 1);
  body.style.background = "black";
  secret.textContent = "?";
  secret.style.width = "80px";
  secret.style.height = "40px";
  guess.value = "";
  guess.style.background = "black";
  message.textContent = "Start guessing...";
  highScoreHtml.textContent = highScore;
  score = 20;
  scoreHtml.textContent = score;
}
again.addEventListener("click", reset);
