const history = {};
function success(numGuesses, userName) {
    const prevAttempt = history[userName];
            const difference = prevAttempt - numGuesses;
            if ( difference < 0) {
                alert(`That's correct ${userName}! You did better in your last game by ${Math.abs(difference)} fewer guesses!`);
            } else if (difference > 0) {
                alert(`Thats correct ${userName}! And you beat your previous attempt by ${difference} fewer guesses!`);
            } else {
                alert(`Thats correct ${userName}! You tied your previous attempt!`);
            }
}
function play() {
    let numGuesses = 1;
    const userName = prompt("What is your name?");
    const secretNum = Math.floor(Math.random() * 10) + 1;

  while (true) {
    const guess =  prompt("Guess a number.");
    if (guess === null) {
        alert("Goodbye!");
        break;
    }

    const numGuess = Number(guess);

    if (Number.isNaN(numGuess)) {
        alert("Please enter a valid number");
    } else if (numGuess < secretNum) {
        numGuesses++
         alert(`Sorry ${userName} guess higher`)
     } else if (numGuess > secretNum) {
        numGuesses++
         alert(`Sorry ${userName} guess lower`)
     } else {

        if (!history.hasOwnProperty(userName)) {
            alert(`Correct! It took you ${numGuesses} guesses!`)

        } else {
            success(numGuesses, userName)
        }

        history[userName] = numGuesses
        const playAgain = prompt("Do you want to play again?");
         if (playAgain.toLowerCase() == "yes") {
            play()
         } else {
         break;
         }
     }
  }
};

play()

function playAgain() {
    
}
