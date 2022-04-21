let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor((Math.random()*10));
};

function compareGuesses(humanGuess, computerGuess, secretTarget){
	const humanDiff = Math.abs(humanGuess - secretTarget);
	const computerDiff = Math.abs(computerGuess - secretTarget);
	if(humanDiff <= computerDiff){
		return true;
	}
	else return false;
};

function updateScore(winner){
	if(winner === 'human'){
		humanScore = humanScore+1;
	} else if(winner === 'computer'){
		computerScore = computerScore +1;
	}
};

function advanceRound(){
	currentRoundNumber = currentRoundNumber +1;
};