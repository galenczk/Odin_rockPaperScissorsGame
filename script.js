let computerChoice = "";

// Creates a random computer choice to play.
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return (computerChoice = "rock");
  } else if (randomNumber === 1) {
    return (computerChoice = "paper");
  } else {
    return (computerChoice = "scissors");
  }
}

// Takes in player and computer choices and returns a winner, or a tie.
function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase(); // Makes the player choice case-insensitive.
  computerChoice = getComputerChoice();
  choicesReport.textContent = [
    `The player has chosen ${playerChoice}.
The computer has chosen ${computerChoice}.`,
  ];

  // Notifies if the player chooses something that doesn't make sense in the game.
  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    return (roundResult.textContent =
      "Your choice is complete nonsense.  You forfeit this round!");
  }

  // Compares the two choices and notifies of a winner, or a tie.
  if (playerChoice === computerChoice) {
    return (roundResult.textContent = "This round was a tie.");
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return (roundResult.textContent = "You have won this round!");
    } else {
      return (roundResult.textContent = "The computer has won this round.");
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return (roundResult.textContent = "You have won this round!");
    } else {
      return (roundResult.textContent = "The computer has won this round.");
    }
  }
}

//Reference body for use in appending new elements.
const body = document.querySelector("body");

//Creating a div to hold the playerChoice buttons, create buttons.
const btnDiv = document.createElement("div");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
btnDiv.append(rockBtn, paperBtn, scissorsBtn);
body.appendChild(btnDiv);

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

//Calls the function playRound on buttonclick with correct playerChoice.
rockBtn.addEventListener("click", function () {
  playRound("rock", computerChoice);
});
paperBtn.addEventListener("click", function () {
  playRound("paper", computerChoice);
});
scissorsBtn.addEventListener("click", function () {
  playRound("scissors", computerChoice);
});

//Create a div for reporting results of rounds.
const resultDiv = document.createElement("div");
body.appendChild(resultDiv);

const choicesReport = document.createElement("p");
resultDiv.appendChild(choicesReport);

choicesReport.style.whiteSpace = "pre"; //whitespace = "pre" allows whitespace to be represented in the template literal

const roundResult = document.createElement("p");
resultDiv.appendChild(roundResult);

//Create a scoreboard, and call a winner after one reaches five points.
const scoreDiv = document.createElement("div");
body.appendChild(scoreDiv);

const playerScore = document.createElement("p");
const computerScore = document.createElement("p");
scoreDiv.append(playerScore);
scoreDiv.append(computerScore);
