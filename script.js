'use strict';

document.querySelector('.check').addEventListener('click',check);
let  numberToGuess =Math.trunc( Math.random()*20)+1;
let  score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
function check(){
    const guess = Number(document.querySelector('.guess').value);
    

    document.querySelector('.number').textContent = guess;
    if (!guess) {
      document.querySelector('.message').textContent =
        'πππPlease enter a number';
    } else if (guess == numberToGuess) {
      document.querySelector('.message').textContent = 'you guessed the number';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (highScore < score) {
        highScore = score;
      }
      document.querySelector('.highscore').textContent = highScore;
    } else if (guess !== numberToGuess) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        // guess > secretNumber ? 'π Too high!' : 'π Too low!';
        displayMessage(guess > numberToGuess ? 'π Too high!' : 'π Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = 'π₯ You lost the game!';
        displayMessage('π₯ You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
}
document.querySelector('.again').addEventListener('click', reset);

function reset(){
    score = 20;
    numberToGuess = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
}