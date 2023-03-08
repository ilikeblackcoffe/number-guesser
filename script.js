let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// generates the random number known as magicNumber 
const generateTarget = n => {
   n = Math.floor(Math.random()*10);
   return n;
}

const compareGuesses = (humanNumber, computerNumber, magicNumber) => {
const humanWasTheClosest = Math.abs(magicNumber - humanNumber)<= Math.abs(magicNumber - computerNumber);
const computerWasTheClosest = Math.abs(magicNumber - computerNumber) < Math.abs(magicNumber - humanNumber);

 if (humanNumber && computerNumber === magicNumber) {
    return true;
} else if (humanWasTheClosest) {
    return true
} else if (computerWasTheClosest) {
    return false
    }
}

const updateScore = (winner = "") =>{
    if (winner === "human") {
        return humanScore ++;
    } else if (winner === "computer" ) {
        return computerScore ++;
    }
}

const advanceRound = () => {
    return currentRoundNumber ++;
}