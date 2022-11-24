function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.floor((Math.random()*3)+1);

    switch (randomNumber){
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
        default:
            computerChoice = "";
            break;
    }
    return computerChoice;
}

console.log(getComputerChoice());