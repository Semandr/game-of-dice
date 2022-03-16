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
let currentScore = 0;

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', e => {
  // Generating a random dice roll
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `../images/dice-${diceNum}.png`;
  // Check for rolled 1: if true, switch to the next player
  if (diceNum !== 1) {
    // Add the dice to the current csore
    currentScore += diceNum;
    current0El.textContent = currentScore;
  } else {
  }
});
