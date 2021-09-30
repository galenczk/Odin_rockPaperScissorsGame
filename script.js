let computerChoice = "";

//Create a score counter for the player and computer scores.
let playerScoreCount = 0;
let computerScoreCount = 0;

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
  computerChoice = getComputerChoice();

  if (winnerAnnounce) {
    winnerAnnounce.textContent = "";
  }

  choicesReport.textContent = [
    `You have chosen ${playerChoice}.
The computer has chosen ${computerChoice}.`,
  ];

  // Compares the two choices and notifies of a winner, or a tie.
  if (playerChoice === computerChoice) {
    return 2;
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return 1;
    } else {
      return 0;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return 1;
    } else {
      return 0;
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
  if (playRound("rock", computerChoice) === 0) {
    roundResult.textContent = "The computer has won this round.";
    countScore(0);
  } else if (playRound("rock", computerChoice) === 1) {
    roundResult.textContent = "You have won this round!";
    countScore(1);
  } else {
    roundResult.textContent = "This round was a tie.";
  }
});
paperBtn.addEventListener("click", function () {
  playRound("paper", computerChoice);
  if (playRound("paper", computerChoice) === 0) {
    roundResult.textContent = "The computer has won this round.";
    countScore(0);
  } else if (playRound("paper", computerChoice) === 1) {
    roundResult.textContent = "You have won this round!";
    countScore(1);
  } else {
    roundResult.textContent = "This round was a tie.";
  }
});
scissorsBtn.addEventListener("click", function () {
  playRound("scissors", computerChoice);
  if (playRound("scissors", computerChoice) === 0) {
    roundResult.textContent = "The computer has won this round.";
    countScore(0);
  } else if (playRound("scissors", computerChoice) === 1) {
    roundResult.textContent = "You have won this round!";
    countScore(1);
  } else {
    roundResult.textContent = "This round was a tie.";
  }
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

const playerScoreDisp = document.createElement("p");
const computerScoreDisp = document.createElement("p");
scoreDiv.appendChild(playerScoreDisp);
scoreDiv.append(computerScoreDisp);

const winnerAnnounce = document.createElement("p");
scoreDiv.appendChild(winnerAnnounce);

//Create a counter function for scores.
function countScore(result) {
  if (result === 1) {
    playerScoreCount++;
    playerScoreDisp.textContent = `Your score is ${playerScoreCount}`;
  } else if (result === 0) {
    computerScoreCount++;
    playerScoreDisp.textContent = `Your score is ${playerScoreCount}`;
    computerScoreDisp.textContent = `The computer's score is ${computerScoreCount}`;
  }
  if (playerScoreCount === 5) {
    winnerAnnounce.textContent = "You have won the game!!!";
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScoreDisp.textContent = `Your score is ${playerScoreCount}`;
    computerScoreDisp.textContent = `The computer's score is ${computerScoreCount}`;
  } else if (computerScoreCount === 5) {
    winnerAnnounce.textContent = "The computer has won the game.";
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScoreDisp.textContent = `Your score is ${playerScoreCount}`;
    computerScoreDisp.textContent = `The computer's score is ${computerScoreCount}`;
  }
}
