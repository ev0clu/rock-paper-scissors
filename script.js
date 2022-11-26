// Generate random number between 1...3 which belongs to the choice of computer from rock, paper or scissors
function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.floor((Math.random()*3)+1);

    switch (randomNumber){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
        default:
            computerChoice = "";
            break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    // if playerSelection has any capital letter, than convert it into lower case
    if(playerSelection !== playerSelection.toLowerCase()){
        playerSelection = playerSelection.toLowerCase();
    }
    
    // Rock beats scissors, scissors beat paper, and paper beats rock.
    if(playerSelection == computerSelection){
        return "It's a tie!";
    }
    else if((playerSelection == "rock") && (computerSelection == "scissors")){
        return "You Won! Rock beats Scissors";
    }
    else if((playerSelection == "scissors") && (computerSelection == "paper")){
        return "You Won! Sciccors beats Paper";
    }
    else if((playerSelection == "paper") && (computerSelection == "rock")){
        return "You Won! Paper beats Rock";
    }
    else if((computerSelection == "rock") && (playerSelection == "scissors")){
        return "You Lost! Rock beats Scissors";
    }
    else if((computerSelection == "scissors") && (playerSelection == "paper")){
        return "You Lost! Sciccors beats Paper";
    }
    else if((computerSelection == "paper") && (playerSelection == "rock")){
        return "You Lost! Paper beats Rock";
    }
  }

  function game(){
    let playerScore = 0;
    let computerScore = 0;
    let winner = "";

    for (let i = 0; i<5; i++){
        winner = playRound(prompt("Choose from Rock, Paper or Scissors:", "Rock"), getComputerChoice());

        if(winner.includes("Won")){
            playerScore = playerScore + 1;
        }
        else if(winner.includes("Lost")){
            computerScore = computerScore + 1;
        }
        console.log(winner);
        console.log(playerScore,computerScore);
    }

    if(playerScore == computerScore){
        return "It's a tie"
    }
    else if(playerScore > computerScore){
        return "You Won!"
    }
    else{
        return "You Lost!"
    }
  }

console.log(game());