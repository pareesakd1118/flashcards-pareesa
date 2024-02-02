// This is where your project starts.
//More practice
// Add functionality so that a score of less than 90% will require the user to go through the entire dataset again.

console.log('Your project is running...'); 
const { start } = require('./src/game');
const { createRound, calculatePercentCorrect } = require('./src/card');

start() 

// function tryAgain() {
//     if (calculatePercentCorrect(round) < 90) {
//         start()
//     }
// }

// tryAgain()