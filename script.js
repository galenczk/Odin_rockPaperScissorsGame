let playerChoice = prompt();
let computerChoice = "";

// Creates a random computer choice to play.
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return computerChoice = "rock";
    } else if (randomNumber === 1){
        return computerChoice = "paper";
    } else{
        return computerChoice = "scissors";
    }
}

// Takes in player and computer choices and returns a winner, or a tie.
function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();  // Makes the player choice case-insensitive.

    console.log(`The player has chosen ${playerChoice}.`);

    // Notifies if the player chooses something that doesn't make sense in the game.
    if(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !=="scissors"){
        return "Your choice is complete nonsense.  You forfeit this round!";
    }

    console.log(`The computer has chosen ${computerChoice}.`);

    // Compares the two choices and notifies of a winner, or a tie.
    if (playerChoice === computerChoice){
        return "This round was a tie.";
    }else if (playerChoice === "rock"){
        if (computerChoice === "scissors"){
            return "You have won this round!";
        } else{ 
            return "The computer has won this round."; 
        } 
    }else if (playerChoice === "paper"){
        if(computerChoice === "rock"){
            return "You have won this round!";
        } else{
            return "The computer has won this round.";
        }
    } 
}

function play5Rounds(){
    // Counter for the number of rounds played.
    let roundCount = 1;

    // Scores for player and computer
    let playerScore = 0;
    let computerScore = 0;

    // While loop to run through 5 rounds.
    while (roundCount < 6){
        // Announces the round number.
        console.log(`Round ${roundCount}!`)

        // Saves the return value from playRound() to determine winner.
        let result = playRound(playerChoice, getComputerChoice());

        // Repeats the input process for nonsense entries.
        if (result === "Your choice is complete nonsense.  You forfeit this round!"){
            console.log(result);
            playerChoice = prompt();
        }
        
        // Awards points to winner.
        else if (result === "You have won this round!"){
            console.log(result);
            playerScore ++;
        }else if(result === "The computer has won this round."){
            console.log(result);
            computerScore ++;
        }
        
        // Repeats the round for ties.
        else if(result === "This round was a tie."){
            console.log(result);
            roundCount --;
        }
        roundCount ++;
    }

    // Reads the score.
    return `The computer has scored ${computerScore}.  You have scored ${playerScore}.`
}

console.log(play5Rounds());
// Creating a game function that plays 5 rounds and returns the score.
// Create a while loop that runs through 5 rounds
// Create counters for playerScore and computerScore
// Recognize a win for either party from the return of playRound()