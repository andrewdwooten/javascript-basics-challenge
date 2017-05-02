function guessingGame(answer) {
    this.answer = answer;
    this.isSolved = false;
}
guessingGame.prototype.correctGuess = function(){
    console.log('YOU WIN!!!');
    this.isSolved = true;
    return 'correct';
}
guessingGame.prototype.highGuess = function(){
    console.log('high');
    return 'high';
}
guessingGame.prototype.lowGuess = function(){
    console.log('low');
    return "low";
}
guessingGame.prototype.guess = function(userGuess){
  if(userGuess == this.answer){
    return this.correctGuess();
  }
  else if(userGuess > this.answer){
    return this.highGuess();
  }
  else{
    return this.lowGuess();
  }
}

module.exports.guessingGame = guessingGame;
module.exports.guess = guessingGame.prototype.guess;
module.exports.correctGuess = guessingGame.prototype.correctGuess;
module.exports.highGuess = guessingGame.prototype.highGuess;
module.exports.lowGuess = guessingGame.prototype.lowGuess;
