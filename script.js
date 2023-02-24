'use strict';

document.querySelector('.check').addEventListener('click',check);
let  numberToGuess =Math.trunc( Math.random()*20)+1;
let  score = 20;
let highScore = 0;
function check(){
    const guess = Number(document.querySelector('.guess').value);
    

    document.querySelector('.number').textContent = guess;
    if(!guess){
        document.querySelector('.message').textContent = '😂😂😂Please enter a number';
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
    else if(guess==numberToGuess){
        
        document.querySelector('.message').textContent =
          'you guessed the number';
          document.querySelector('body').style.backgroundColor='#60b347';
          document.querySelector('.number').style.width='30rem';
    }
    else if(guess<numberToGuess){
        if (score > 1) {
            document.querySelector('.message').textContent = 'you are low';
            score -= 1;
            document.querySelector('.score').textContent = score;

        }
        else{
            document.querySelector('.message').textContent = 'You loose try again later';
            
        }
        
    }
    else if(guess>numberToGuess){
        if (score > 1) {
          document.querySelector('.message').textContent = 'you are high';
          score -= 1;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.message').textContent =
            'You loose try again later';
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