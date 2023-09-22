let playerWinCount = 0
let computerWinCount = 0
let matchNumberCount = 0
computerSelection = ""

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    }
    )
})

// function getComputerChoice(){
//     let results = ['rock', 'paper', 'scissors']
//     return results[Math.floor(Math.random() * results.length)]
// }

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3)
    switch (result) {
        case 0:
            computerSelection = "rock"
            break;
        case 1:
            computerSelection = "paper"
            break;
        case 2:
            computerSelection = "scissors"
        //break; necessary to break the last case in a switch block as the block breaks (ends) there anyway.
    }
}


function playRound(playerSelection) {

    getComputerChoice()

    let resultAnnouncement = ""

    console.log("Player: " + playerSelection)
    console.log("Computer: " + computerSelection)

    let matchResult = ""

    if ((playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper")) {
        playerWinCount++
        matchNumberCount++
        matchResult = "win"
    } else if (playerSelection == computerSelection) {
        matchResult = "tie"
        matchNumberCount++
    } else if ((playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock")) {
        computerWinCount++
        matchNumberCount++
        matchResult = "lose"
    }

    switch (matchResult) {
        case "win":

            resultAnnouncement = "You win! " + playerSelection + " beats " + computerSelection + "." +
                "<br> Current Match Number: " + matchNumberCount +
                "<br> Current Player Score: " + playerWinCount +
                "<br> Current Computer Score: " + computerWinCount

            if (playerWinCount == 5) {
                resultAnnouncement = ("You won the game.") +
                "<br> Final Match Number: " + matchNumberCount +
                "<br> Final Player Score: " + playerWinCount +
                "<br> Final Computer Score: " + computerWinCount
            }
            break;

        case "tie":
            resultAnnouncement = "It's a draw. Player and computer both chose " + playerSelection + "." +
                "<br> Current Match Number: " + matchNumberCount +
                "<br> Current Player Score: " + playerWinCount +
                "<br> Current Computer Score: " + computerWinCount
            break;

        case "lose":
            resultAnnouncement = "You lose... " + computerSelection + " beats " + playerSelection + "." +
                "<br> Current Match Number: " + matchNumberCount +
                "<br> Current Player Score: " + playerWinCount +
                "<br> Current Computer Score: " + computerWinCount

            if (computerWinCount == 5) {
                resultAnnouncement = ("You lost the game.") +
                "<br> Final Match Number: " + matchNumberCount +
                "<br> Final Player Score: " + playerWinCount +
                "<br> Final Computer Score: " + computerWinCount
            }
            break;

    }

    document.getElementById('result').innerHTML = resultAnnouncement;


}
