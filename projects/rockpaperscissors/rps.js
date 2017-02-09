var userWins = "You Win!";
var computerWins = "The computer Wins!";
var roundCounter = 0;

var gameRound = function() {

  var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'");
  var rng = Math.random();
  var computerChoice = "R";
  if(rng > 0.66) {
    computerChoice = "P";
  } else if (rng > 0.33) {
    computerChoice = "S";
  }
  // R beats S
  // S beats P
  // P beats R
  if(computerChoice !== userChoice) {
    if(computerChoice === "R") {
      if(userChoice === "S") {
        alert(computerWins);
      } else {
        alert(userWins);
      }
    } else if (computerChoice === "P") {
      if(userChoice === "R") {
        alert(computerWins);
      }else {
        alert(userWins);
      }
    } else {
      if(userChoice === "P") {
        alert (computerWins);
      } else {
        alert(userWins);
      }
    }
  } else {
    alert("Tie!");
  }
}

while (roundCounter < 5) {
  gameRound();
  roundCounter++;
}
