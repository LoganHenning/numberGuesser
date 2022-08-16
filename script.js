let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
	return Math.floor(Math.random()*10);
}

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
	let humanDiff = Math.abs(targetNum - humanGuess);
	let computerDiff = Math.abs(targetNum - computerGuess);
	if(humanDiff < computerDiff) {
		return true;
	} else if(humanDiff === computerDiff){
		return true;
	} else if(humanDiff > computerDiff){
		return false;
}
}

const updateScore = (winnerIs) => {
	if(winnerIs === 'human'){
		humanScore += 1;
	} else if (winnerIs === 'computer'){
		computerScore += 1;
	}
}

const advanceRound = () => {
	currentRoundNumber += 1;
}