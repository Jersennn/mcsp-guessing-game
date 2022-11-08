var count = 0;
let prevGuess = [];
let history = {}
const userName = prompt("What is your name?");
history[username]


function play(){
    const secretNum = Math.floor(Math.random() * 10) + 1;
  while (true) {
    const guess =  prompt("Guess a number.");
    count++
    if (guess === null) {
        alert("Goodbye!");
        break;
    }

    const numGuess = Number(guess);

    if (Number.isNaN(numGuess)) {
        alert("Please enter a valid number");
    } else if (numGuess < secretNum) {
         alert(`Sorry ${userName} guess higher`)
         prevGuess.push(numGuess)
     } else if (numGuess > secretNum) {
         alert(`Sorry ${userName} guess lower`)
         prrevGuess.push(numGuess)
     } else {
         alert(`Correct! You're previous guesses were:  ${prevGuess.join(" , ")}`);
         const playAgain = prompt("Do you want to play again?");
         if (playAgain.toLowerCase() === "yes") {
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
