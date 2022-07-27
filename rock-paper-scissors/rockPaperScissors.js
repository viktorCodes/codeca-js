/* Rock, Paper, Scissors Game */

//GET USER CHOICE

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    } else{
        console.log('Error!');
    };
};
console.log(getUserChoice('rock'));

//GET COMPUTER CHOICE

const getComputerChoice = () => {

    const randomNumber = Math.floor(Math.random() *3);

    switch(randomNumber){
        case 0:
            return 'rock';
            case 1: 
            return 'paper';
            case 2: 
            return 'scissors';
    };
};
console.log(getComputerChoice());

//DETERMINE WINNER

const determineWinner = (userChoice, computerChoice) =>{
    if(userChoice === computerChoice){
        return " This game is a tie!"
    };

    if( userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'Sorry, Computer won!'
        }else {
            return 'Congratulations, You won!'
        };
    };
    
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'Sorry, Computer won!'
        } else{
           return 'Congratulations, You won!'
        };
    };

    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'Sorry, Computer won'
        }
    }else{
        return 'Congratulations, You won!'
     };

     if (userChoice === 'bomb'){
        return 'Congratulations, you won'
     };
};

//PLAY GAME

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();

    console.log('You threw: ' + userChoice);
    console.log('The Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();