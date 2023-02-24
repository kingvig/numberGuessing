'use strict';

document.querySelector('.check').addEventListener('click',check);
const numberToGuess =Math.trunc( Math.random()*20)+1;
let  score = 20;
function check(){
    const guess = Number(document.querySelector('.guess').value);
    

    document.querySelector('.number').textContent = guess;
    if(!guess){
        document.querySelector('.message').textContent = '😂😂😂Please enter a number';
    }
    else if(guess==numberToGuess){
        document.querySelector('.message').textContent =
          'you guessed the number';
    }
    else if(guess<numberToGuess){
        document.querySelector('.message').textContent =
          'you are too low';
          score -=1;
          document.querySelector('.score').textContent = score;
    }
    else if(guess>numberToGuess){
        document.querySelector('.message').textContent = 'you are too high';
        score -=1;
        document.querySelector('.score').textContent = score;
    }
}