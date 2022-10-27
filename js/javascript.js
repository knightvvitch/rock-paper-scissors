let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let choices = [ "rock" , "paper" , "scissors" ];
    let index = Math.floor((Math.random() * choices.length));
    return (choices[index]);
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    score();
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("This Round is a tie!");
    }
    
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            alert("You Lose this Round! Paper covers Rock");
        }
        else if (computerSelection === "scissors") {
            playerScore++;
            alert("You Win this Round! Rock breaks Scissors");
        }
        }
    
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            alert("You Lose this Round! Scissors cut Paper");
        }
        else if (computerSelection === "rock") {
            playerScore++;
            alert("You Win this Round! Paper covers Rock");
        }
    }
    
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            alert("You Lose this Round! Rock breaks Scissors");
        }
        else if (computerSelection === "paper") {
            playerScore++;
            alert("You Win this Round! Scissors cut Paper");
        }
    }
}

function score() {
    if (computerScore > playerScore) {
        alert("Sorry, you lost the game. Refresh and try again!")
    }
    else {
        alert("Congratulations, you won the game!")
    }
}

game();

console.log(computerSelection, playerSelection);