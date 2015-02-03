var ROCK       = 1
  , PAPER      = 2
  , SCISSORS   = 3
  , userChoice = 0
  , compChoice = 0
  , gameResult = '';
  // rock > scissors, scissors > paper, paper > rock
  //    1 > 3                3 > 2          2 > 1

// returns 1,2,3. called on div click event
function userPicks (choice) {
  if (choice === 'Rock') return 1;
  if (choice === 'Paper') return 2;
  if (choice === 'Scissors') return 3;
  else return 0;
}

// returns 1,2,3 randomly. called on div click event
function compPicks () {
  return Math.floor(Math.random() * 3);
}

function stringify (choice) {
  if (choice === 1) return 'rock';
  if (choice === 2) return 'paper';
  if (choice === 3) return 'scissors';
  else return '';
}

function gameTied (user, comp) {
  if (user === comp) return true;
  else return false;
}

// compares picks. called on div click event
function didYouWin () {
  if (userChoice === ROCK && compChoice === SCISSORS) {
    return true;
  }
  if (userChoice > compChoice) {
    return true;
  }
  else return false;
}

function updateUser () {
  if (gameTied) gameResult = 'You tied.';
  if (didYouWin()) gameResult = 'YOU WON!';
  else gameResult = 'You lost.';
  $('#result').text('You picked ' + stringify(userChoice) + '. The computer picked ' + stringify(compChoice) + '. ' + gameResult);
}

$('#game').on('click', 'button', function (event) {
  event.preventDefault();

  userChoice = userPicks($(this).text());
  compChoice = compPicks();

  var gameTied = (userChoice === compChoice) ? true : false;

  updateUser();

});
