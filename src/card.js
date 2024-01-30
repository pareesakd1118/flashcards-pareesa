
function createCard(id, question, answers, correctAnswer) {
    card = {
        id,
        question,
        answers,
        correctAnswer
    }

    return card
}

function evaluateGuess(guess, correctAnswer) {
    return guess === correctAnswer.correctAnswer ? 'correct!' : 'incorrect!'
}

module.exports = { 
    createCard,
    evaluateGuess
};