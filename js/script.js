'use strict';
// Selecting elements
const score0El = document.getElementById('score-0');
const score1El = document.getElementById('score-1');
const current0El = document.getElementById('current-0');
const current1El = document.getElementById('current-1');
const diceEl = document.querySelector('.dice');
const bntNew = document.querySelector('.btn__new');
const btnRoll = document.querySelector('.btn__roll');
const btnHold = document.querySelector('.btn__hold');
const player0 = document.querySelector('.player__0');
const player1 = document.querySelector('.player__1');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

function switchPlayer() {
  // Resetting the current score
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  // Switch the player
  // Here we are reasign an active player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player__active');
  player1.classList.toggle('player__active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  // Generating a random dice roll
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `../images/dice-${diceNum}.png`;
  // Check for rolled 1: if true, switch to the next player
  if (diceNum !== 1) {
    // Add the dice to the current csore
    currentScore += diceNum;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', () => {
  // Add current score to active player's score
  scores[activePlayer] += currentScore;
  // scores[1] = scores[1] + currentScore
  document.getElementById(`score-${activePlayer}`).textContent =
    scores[activePlayer];
  // Check if player's score is >= 100
  if (scores[activePlayer] >= 100) {
    // - finish the game
    document
      .querySelector(`player__${activePlayer}`)
      .classList.add('player__winner');
    document
      .querySelector(`player__${activePlayer}`)
      .classList.remove('player__active');
  } else {
    // - switch to the next player
    switchPlayer();
  }
});
