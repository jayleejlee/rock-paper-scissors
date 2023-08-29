let playerWinCount = 0;
let computerWinCount = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return playerTie;
        } else if (computerSelection == "paper") {
            computerWinCount++;
            return playerLose;
            playerWinCount++;
        } else if (computerSelection == "scissors") {
            playerWinCount++;
            return playerWin;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWinCount++;
            return playerWin;
        } else if (computerSelection == "paper") {
            return playerTie;
        } else if (computerSelection == "scissors") {
            computerWinCount++;
            return playerLose;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerWinCount++;
            return playerLose;
        } else if (computerSelection == "paper") {
            playerWinCount++;
            return playerWin;
        } else if (computerSelection == "scissors") {
            return playerTie;
        }
    } else {
        console.log("You did not type rock, paper or scissors. Please try again.");
    }
}

const playerSelection = prompt("Choose from the following: Rock, paper, scissors", "rock").toLowerCase();
const computerSelection = "rock";

console.log("Player chose: " + playerSelection);
console.log("Computer chose: " + computerSelection);

const playerWin = "You win! " + playerSelection + " beats " + computerSelection;
const playerLose = "You lose. " + computerSelection + " beats " + playerSelection;
const playerTie = "You are tied. Player and computer both chose " + playerSelection;

console.log(playRound(playerSelection, computerSelection));
console.log("Player : " + playerWinCount);
console.log("Computer : " + computerWinCount);

// for (let i = 0; i < 5; i++) {
//     console.log(playRound(playerSelection, computerSelection));
// }



// function capitalizeFirstLetter(str) {
//     const playerSelection = str.charAt(0).toUpperCase() + str.slice(1);

//     return playerSelection;

// }


//capitalizeFirstLetter(playerSelection);


//const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
