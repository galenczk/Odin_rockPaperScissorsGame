// Create a computer choice of RPS, based on random number 
// Gather a player input for their choice.
// Compare the computer's and player's choices and call the game.


let playerChoice = "Rock";
let computerChoice = "";

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    
    if(randomNumber === 0){
        computerChoice = "Rock";
    }else if (randomNumber === 1){
        computerChoice = "Paper";
    }else {
        computerChoice = "Scissors";
    }
}
computerPlay();


function playGame(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        console.log("This round was a tie!");
    }else if(playerChoice === "Rock"){
        if (computerChoice === "Scissors"){
            console.log("You won this round!")
        }else{
            console.log("The computer won this round.")
        }
    }else if (playerChoice ==="Paper"){
        if (computerChoice ==="Rock"){
            console.log("You won this round!")
        }else{
            console.log("The computer won this round.")
        }
    }else{
    if (computerChoice ==="Paper"){
        console.log("You won this round!")
    }else{
        console.log("The computer won this round.")
    }
}
}

console.log(`The player chose ${playerChoice}`);
console.log(`The computer chose ${computerChoice}`);
playGame(playerChoice, computerChoice);