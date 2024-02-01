const data = require('./data');
const { createDeck, createRound, countCards } = require('./card');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const deck = createDeck(prototypeQuestions)
  const round = createRound(deck)
  printMessage(deck)
  printQuestion(round)
}

module.exports = { 
  start
};
// Your game should meet these other requirements:
// start(): the function that starts everything
// Creates cards
// Puts cards in a deck
// Creates a new round using the deck
// Invokes printMessage(deck) to display the message in the CLI
// Invokes printQuestion(round) to kick off our helper functions that allow interaction via the CLI
// Your game’s start() function should be invoked to make the game playable in the console.
// Look at the file being run when we want to start the game. Think about where you need to invoke your start function.
// module.exports = { printMessage, printQuestion };
