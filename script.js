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
  console.log(`The player has chosen ${playerChoice}.`);

  // Notifies if the player chooses something that doesn't make sense in the game.
  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    return "Your choice is complete nonsense.  You forfeit this round!";
  }

  console.log(`The computer has chosen ${computerChoice}.`);

  // Compares the two choices and notifies of a winner, or a tie.
  if (playerChoice === computerChoice) {
    return "This round was a tie.";
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You have won this round!";
    } else {
      return "The computer has won this round.";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "You have won this round!";
    } else {
      return "The computer has won this round.";
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
resultDiv.style.border = "2px solid black";
