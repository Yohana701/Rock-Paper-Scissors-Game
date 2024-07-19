// Array of choices
const choices = ['Rock', 'Paper', 'Scissors'];

// Function to get computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine game result
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();

  let result;

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    result = 'You win!';
  } else {
    result = 'Computer wins!';
  }

  // Display result to the user
  const resultElement = document.getElementById('result');
  resultElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}

// Event listeners for player's choices
document.getElementById('rock').addEventListener('click', function() {
  playGame('Rock');
});

document.getElementById('paper').addEventListener('click', function() {
  playGame('Paper');
});

document.getElementById('scissors').addEventListener('click', function() {
  playGame('Scissors');
});
