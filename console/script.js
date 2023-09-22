let playerWinCount = 0;
let computerWinCount = 0;

let computerSelection;
let playerSelection;

function getPlayerChoice() {
    playerSelection = prompt("Choose from the following: Rock, paper, scissors", "rock").toLowerCase();
}

let threeOptions = ["rock", "paper", "scissors"]; 

function getComputerChoice(){
    computerSelection = threeOptions[Math.floor(Math.random() * threeOptions.length)];
}

function playRound(playerSelection, computerSelection) {

    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);

    let playerWin = "You win! " + playerSelection + " beats " + computerSelection + ".";
    let playerLose = "You lose... " + computerSelection + " beats " + playerSelection + ".";
    let playerTie = "It's a draw. Player and computer both chose " + playerSelection + ".";

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return playerTie;
        } else if (computerSelection == "paper") {
            computerWinCount++;
            return playerLose;
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

function game() {

    for (let i = 1; i <= 5; i++) {

        console.log("Game number " + i);

        getPlayerChoice();
        getComputerChoice()

        console.log(playRound(playerSelection, computerSelection));

        console.log("\n");
        console.log("Current score: ");
        console.log("Player : " + playerWinCount);
        console.log("Computer : " + computerWinCount);
        console.log("\n");
    }

    if (playerWinCount < computerWinCount) {
        console.log("The computer wins...(as always)");
    } else if (playerWinCount > computerWinCount) {
        console.log("A WINNER IS YOU");
    } else {
        console.log("We have a tie.");
    }

}

game();