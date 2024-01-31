
function createCard(id, question, answers, correctAnswer) {
    card = {
        id,
        question,
        answers,
        correctAnswer
    }

    return card;
}

function evaluateGuess(guess, card) {
    return guess === card.correctAnswer ? 'correct!' : 'incorrect!';
}

function createDeck(deck) {
    return deck;
}

function countDeck(deck) {
    return deck.length;
}

function createRound(deck) {
    let round = {
        deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
    };

    return round;
}

function takeTurn(guess, round) {
    const evaluatedGuessMessage = evaluateGuess(guess, round.currentCard);

    if (evaluatedGuessMessage === 'incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id)
    }; 

    round.turns++;
    round.currentCard = round.deck[round.turns];

    return evaluatedGuessMessage;
}

function calculatePercentCorrect(round) {
    let percentCorrect = ((round.deck.length - round.incorrectGuesses.length)/round.deck.length) * 100;
    percentCorrect = Math.round(percentCorrect);

    return percentCorrect;
}

function endRound(round) {
    let percentCorrect = ((round.deck.length - round.incorrectGuesses.length)/round.deck.length) * 100;
    percentCorrect = Math.round(percentCorrect);
    let endMessage = `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`

    console.log(endMessage);
}



module.exports = { 
    createCard,
    evaluateGuess,
    createDeck,
    countDeck,
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
};