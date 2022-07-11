// 'use strict';
// document.querySelector('.message').textContent = 'Correct Number....';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = '23';

// const secretNumber = Math.trunc(Math.random() * 20) + 1;

// var score = 20;
// var highscore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess || guess < 1 || guess > 20) {
//     document.querySelector('.message').textContent = 'Enter Valid Number!';
//   } else if (guess === secretNumber) {
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('.message').textContent = 'Correct number!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     if (highscore < score) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   } else if (guess > secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'Too High!';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//     }
//   } else if (guess < secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'Too Low!';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   document.querySelector('.score').textContent = '20';
//   document.querySelector('.message').textContent = 'Start guessing....';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// document.querySelector('.check').addEventListener('click', function () {
//   document.querySelector('.message').textContent = 'woww you are well played';
//   document.querySelector('.check').style.color = 'blue';
//   document.querySelector('body').style.backgroundColor = '#222';
// });

'use strict';
let score = 20;
let highScore = 0;
let secretScore = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess || guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = 'Enter a valid number!';
  } else if (guess < secretScore) {
    if (score <= 0) {
      document.querySelector('.message').textContent = 'Lost game!';
    } else {
      document.querySelector('.message').textContent = 'Too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess > secretScore) {
    if (score <= 0) {
      document.querySelector('.message').textContent = 'Lost game!';
    } else {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess === secretScore) {
    document.querySelector('.message').textContent = 'Correct Answer!';
    document.querySelector('body').style.backgroundColor = '#377D71';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.backgroundColor = 'pink';
    document.querySelector('h1').textContent = 'Congrats You Won 😎';
    document.querySelector('h1').style.color = 'pink';
    document.querySelector('.number').textContent = secretScore;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('h1').textContent = 'Guess My Number';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.backgroundColor = 'white';
  document.querySelector('h1').style.color = 'white';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.message').textContent = 'Start Guessing....';
  document.querySelector('.score').textContent = '20';
  score = 20;
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
});
