// ------- Game ------- //
const playerSelection = document.querySelectorAll('.btn-game');
const restartButton = document.getElementById('btn-restart');

let playerScore = 0;
let computerScore = 0;

// Generate random number between 1...3 which belongs to the choice of computer from rock, paper or scissors
function getComputerChoice() {
  let computerChoice = '';
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  switch (randomNumber) {
    case 1:
      computerChoice = 'rock';
      break;
    case 2:
      computerChoice = 'paper';
      break;
    case 3:
      computerChoice = 'scissors';
      break;
    default:
      computerChoice = '';
      break;
  }
  return computerChoice;
}

// Play a round
function playRound(playerSelection, computerSelection) {
  // Rock beats scissors, scissors beat paper, and paper beats rock.
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You Won! Rock beats Scissors';
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return 'You Won! Sciccors beats Paper';
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 'You Won! Paper beats Rock';
  } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
    return 'You Lost! Rock beats Scissors';
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
    return 'You Lost! Sciccors beats Paper';
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
    return 'You Lost! Paper beats Rock';
  }
}

// ------- Calculate the score of player and computer ------- //
function calcScore(winner) {
  if (!isGameOver()) {
    if (winner.includes('Won')) {
      playerScore = playerScore + 1;
    } else if (winner.includes('Lost')) {
      computerScore = computerScore + 1;
    }
  }
}

// ------- Get the final winner of the game ------- //
function getWinner() {
  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
      return 'Congratulation! You Won!';
    } else if (playerScore < computerScore) {
      return 'Game Over! You Lost!';
    } else if (playerScore == computerScore) {
      return "It's a tie";
    }
  }
}

// ------- Check the player of computer is reached the 5 points in order to know the game is over or not ------- //
function isGameOver() {
  if (playerScore >= 5 || computerScore >= 5) {
    return true;
  } else {
    return false;
  }
}

function playAgain() {
  const scoreP = document.querySelector('#player-score');
  const scoreC = document.querySelector('#computer-score');
  restartButton.style.display = 'none';
  playerSelection.forEach((btn) => {
    btn.classList.remove('inactive');
  });
  playerScore = 0;
  computerScore = 0;
  scoreP.textContent = '0';
  scoreC.textContent = '0';
}

// ------- UI ------- //
// ------- Update the HTML with the game items ------- //
function updateHTML(playerScore, computerScore, roundWinner, gameWinner) {
  const theWinner = document.querySelector('.result');
  const scoreP = document.querySelector('#player-score');
  scoreP.textContent = playerScore.toString();
  const scoreC = document.querySelector('#computer-score');
  scoreC.textContent = computerScore.toString();

  if (isGameOver()) {
    theWinner.textContent = gameWinner;
    restartButton.style.display = 'flex';
    playerSelection.forEach((btn) => {
      btn.classList.add('inactive');
    });
  } else {
    theWinner.textContent = roundWinner;
  }
}

// ------- Steps of playing the game ------- //

playerSelection.forEach((button) => {
  button.addEventListener('click', () => {
    const roundWinner = playRound(button.id, getComputerChoice());
    calcScore(roundWinner);
    const gameWinner = getWinner();
    updateHTML(playerScore, computerScore, roundWinner, gameWinner);
  });
});

restartButton.addEventListener('click', () => {
  playAgain();
});
