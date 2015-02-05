// Model needs outside event handler because more than one click.
// Need objects for player and computer because need to update player with the selections.
var Model = {
  ROCK:     {id: 1, choice: 'rock'},
  PAPER:    {id: 2, choice: 'paper'},
  SCISSORS: {id: 3, choice: 'scissors'},
  choose: function (choice) {
    // return Model[choice.toUpperCase()].id;
    // var property = Model[choice.toUpperCase()];
    // return {
    //   id: property.id,
    //   choice: property.choice
    // };
    return Model[choice.toUpperCase()];
  },
  random: function () {
    // return Math.floor(Math.random() * 3 + 1);
    var selection = Math.floor(Math.random() * 3 + 1);
    for (option in Model) {
      if (Model.hasOwnProperty(option)) {
        var property = Model[option.toUpperCase()];
        if (property.id === selection) {
          return property;
          // return {
          //   id: property.id,
          //   choice: property.choice
          // };
        }
      }
    }
  }
};

function compare (player, computer) {
  // return 1 if player won
  // return -1 if computer won
  // return 0 if tie
  console.log(player);
  console.log(computer);
  if (player.id === computer.id) {
    return 0;
  }
  else {
    // Scissors beats paper.
    // Paper beats rock.
    // Rock beats scissors.
    if (player === Model.ROCK) {
      if (computer === Model.SCISSORS) {
        return 1;
      }
    }
    if (player === Model.PAPER) {
      if (computer === Model.ROCK) {
        return 1;
      }
    }
    if (player === Model.SCISSORS) {
      if (computer === Model.PAPER) {
        return 1;
      }
    }
    // otherwise you lost
    else return -1;
  }
}

// Basically our `function main`
$('#game').on('click', '.selection', function (event) {
  event.preventDefault(); // whatever that does

  var playerOne = Model.choose($(this).text());
  var playerTwo = Model.random();
  var winner = compare(playerOne, playerTwo);
  if (winner === 0) {
    $('#result').text('You both picked ' + playerOne.choice + '. Tie game.');
  } else $('#result').text('You picked ' + playerOne.choice + '. The computer picked ' + playerTwo.choice + '. You ' + ((winner === 1) ? 'won' : 'lost') + '.');

});
