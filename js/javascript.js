game();
function game() {
    for (let i = 0; i < 5; i++) {
        function getComputerChoice() {
            let choices = [ "rock" , "paper" , "scissors" ];
            let index = Math.floor((Math.random() * choices.length));
            return (choices[index]);
        }
        
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                    alert("This Round is a tie!");
            }

            else if (playerSelection === "rock") {
                if (computerSelection === "paper") {
                    alert("You Lose this Round! Paper covers Rock")
                    computerScore++;
                }
                else if (computerSelection === "scissors") {
                    alert("You Win this Round! Rock breaks Scissors")
                    playerScore++;
                }
            }

            else if (playerSelection === "paper") {
                if (computerSelection === "scissors") {
                    alert("You Lose this Round! Scissors cut Paper")
                    computerScore++;
                }
                else if (computerSelection === "rock") {
                    alert("You Win this Round! Paper covers Rock")
                    playerScore++;
                }
            }

            else if (playerSelection === "scissors") {
                if (computerSelection === "rock") {
                    alert("You Lose this Round! Rock breaks Scissors")
                    computerScore++;
                }
                else if (computerSelection === "paper") {
                    alert("You Win this Round! Scissors cut Paper")
                    playerScore++;
                }
            }
        }
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let computerScore = 0;
        let playerScore = 0;
        console.log(playRound(playerSelection, computerSelection));   
    }
    score();
    function score(computerScore, playerScore) {
        if (computerScore > playerScore) {
            alert("Sorry, you lost the game. Refresh and try again!")
        }
        else {
            alert("Congratulations, you won the game!")
        }
    }
}