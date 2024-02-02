const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/card');

var card1;
var card2;
var card3;
var deck;

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  

  
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should evaluate whether the guess is correct', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = evaluateGuess('object', card);
    const turn2 = evaluateGuess('array', card);
    
    expect(turn1).to.equal('correct!');
    expect(turn2).to.equal('incorrect!');
  }); 

  describe('test with beforeEach', () => {
    this.beforeEach(() => {
      card1 = createCard(1, 'What is Pareesas favorite color?', ['blue', 'green', 'pink'], 'blue');
      card2 = createCard(2, 'What is Obisidians favorite snack?', ['beef jerkey', 'cherry tomatoes', 'chicken bones'], 'cherry tomatoes');
      card3 = createCard(3, 'What state only borders one other state?', ['Florida', 'Maryland', 'Maine'], 'Maine');
  
      deck = createDeck([card1, card2, card3]);

    })

    it('should be a function', function() {
      expect(createDeck).to.be.a('function');
    });

    it('should create a deck of cards', function() {
      expect(deck).to.deep.equal([card1, card2, card3]);
    });  

    it('should be a function', function() {
      expect(countCards).to.be.a('function');
    });

    it('should count how many cards are in the deck', function() {
      const deckCount = countCards(deck)

      expect(deckCount).to.equal(3);
    }); 
  
    it('should be a function', function() {
      expect(createRound).to.be.a('function');
    });

    it('should create a round with a property of deck which holds the array of cards object', function() {
      const round = createRound(deck)

      expect(round.deck).to.equal(deck);
      expect(round.deck.length).to.equal(3);
    }); 

    it('should have the first card in the deck as the currentCard property value', function() {
      const round = createRound(deck)

      expect(round.currentCard).to.equal(deck[0]);
    }); 

    it('should have a turns propety whose value starts as 0', function() {
      const round = createRound(deck)

      expect(round.turns).to.equal(0);
    }); 

    it('should have an incorrectGuesses property that starts as empty array that stores incorrect guesses', function() {
      const round = createRound(deck)

      expect(round.incorrectGuesses).to.deep.equal([]);
      expect(round.incorrectGuesses).to.have.lengthOf(0);
    }); 

    it('should be a function', function() {
      expect(takeTurn).to.be.a('function');
    });

    it('should increase the turns property by 1 regardless of whether the guess was correct', function() {
      const round = createRound(deck)
    
      expect(round.turns).to.equal(0); 
      const turn1 = takeTurn('blue', round)
      expect(round.turns).to.equal(1); 
     const turn2 = takeTurn('beef jerkey', round)
      expect(round.turns).to.equal(2); 
      const turn3 = takeTurn('Maine', round)   
    });

    it('should change the currentCard property to the next card in the deck', function() {
      const round = createRound(deck)

      expect(round.currentCard).to.equal(deck[0]); 

      const turn1 = takeTurn('blue', round)

      expect(round.currentCard).to.equal(deck[1]); 

      const turn2 = takeTurn('beef jerkey', round)

      expect(round.currentCard).to.equal(deck[2]); 

      const turn3 = takeTurn('Maine', round)
    });

    it('should store incorrect guesses by ID in the incorrectGuesses property', function() {
      const round = createRound(deck)

      const turn1 = takeTurn('blue', round)

      expect(round.incorrectGuesses).to.deep.equal([]); 

      const turn2 = takeTurn('beef jerkey', round)

      expect(round.incorrectGuesses).to.deep.equal([2]);

      const turn3 = takeTurn('Maine', round)

      expect(round.incorrectGuesses).to.deep.equal([2]); 
    });

    it('should evaluate the guess and return a message saying whether it was correct or incorrect', function() {
      const round = createRound(deck)
      const turn1 = takeTurn('blue', round)
      const turn2 = takeTurn('beef jerkey', round)
      const turn3 = takeTurn('Maine', round)

      expect(turn1).to.deep.equal('correct!'); 
      expect(turn2).to.deep.equal('incorrect!'); 
      expect(turn3).to.deep.equal('correct!'); 
    });

    it('should be a function', function() {
      expect(calculatePercentCorrect).to.be.a('function');
    });

    it('calculates and returns the percentage of correct guesses', function() {
      const round = createRound(deck)
    
      const turn1 = takeTurn('blue', round)
      const turn2 = takeTurn('beef jerkey', round)
      const turn3 = takeTurn('Maine', round) 
    
      const percentCorrect = calculatePercentCorrect(round)

      expect(percentCorrect).to.equal(67);
   });

    it('should be a function', function() {
      expect(endRound).to.be.a('function');
    });

    it('prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!', function() {
      const round = createRound(deck)
    
      const turn1 = takeTurn('blue', round)
      const turn2 = takeTurn('beef jerkey', round)
      const turn3 = takeTurn('Maine', round) 
    
      const endRoundMessage = endRound(round)

      expect(endRoundMessage).to.equal(undefined);
   });
  });
});

