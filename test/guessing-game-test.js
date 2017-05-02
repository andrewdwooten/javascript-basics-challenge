const game = require('../lib/guessing_game')
const expect = require('chai').expect

describe('guessingGame', function(){
  it('has an answer and is not solved by default', function(){
    guesser = new game.guessingGame(20)
    expect(guesser.answer).to.eql(20)
    expect(guesser.isSolved).to.eql(false)
  })
  it('returns "low" for a low guess', function(){
    guesser = new game.guessingGame(20)
    expect(guesser.guess(1)).to.eql("low")
  })
  it('returns "high" for a high guess', function(){
    guesser = new game.guessingGame(20)
    expect(guesser.guess(10000)).to.eql("high")
  })
  it('returns "correct" for a correct guess and becomes solved', function(){
    guesser = new game.guessingGame(20)
    expect(guesser.guess(20)).to.eql("correct")
    expect(guesser.isSolved).to.eql(true)
  })
})
