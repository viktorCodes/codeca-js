let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


//GENERATE TARGET

const generateTarget = () => {

    return Math.floor(Math.random() * 10);
}

console.log(generateTarget());

//COMPARE GUESSES

const compareGuesses = (humanGuess, computerGuess, secretGuess) => {

    const humanDifference = Math.abs(secretGuess - humanGuess );
    const computerDifference = Math.abs(secretGuess - computerGuess);

    return humanDifference <= computerDifference
}

console.log(compareGuesses());

//UPDATE SCORE

const updateScore = winner => {

    if( winner === 'human'){
        return humanScore++;
    }else if( winner === 'computer' ){
        return computerScore++;
    }
};