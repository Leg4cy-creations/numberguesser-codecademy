let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Step 1: "Create a generateTarget(). This function should return a random integer between 0 and 9."
const generateTarget = () => Math.floor(Math.random() * 10);

// Extra Step that returns the distance between 2 numbers
const getAbsoluteDistance = (a, b) => Math.abs(a - b);

// Step 2: It returns true if the user is closer to target. It will return false if the computer is closer to the target. It alerts if the guess is out of the range.
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {

  if (humanGuess < 0 || humanGuess > 9) {
        alert("You have lost. Please make sure your guess is between 0 and 9!!");
  } else if (getAbsoluteDistance(humanGuess, targetNumber) < getAbsoluteDistance(computerGuess, targetNumber)) {
    return true;
  }
    return false;
}

// Step 3: Chooses the winner and updates the score accordingly.
const updateScore = winner => {

  if (compareGuesses() === true) {
    return humanScore++;
  } else if (compareGuesses() === false) {
    return computerScore++;
  } else {
    return "Something that isn't right went wrong."
  }
}

// Step 4: Advances the round counter.
const advanceRound = () => currentRoundNumber++;