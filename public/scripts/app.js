// Model needs outside event handler because more than one click.
// Need objects for player and computer because need to update player with the selections.
var Model = {
  ROCK:     {id: 1, choice: 'rock'},
  PAPER:    {id: 2, choice: 'paper'},
  SCISSORS: {id: 3, choice: 'scissors'},
  choose: function (choice) {
    // return Model[choice.toUpperCase()].id;
    var property = Model[choice.toUpperCase()];
    return {
      id: property.id,
      choice: property.choice
    };
  },
  random: function () {
    // return Math.floor(Math.random() * 3 + 1);
    var selection = Math.floor(Math.random() * 3 + 1);
    for (option in Model) {
      if (Model.hasOwnProperty(option)) {
        var property = Model[option.toUpperCase()];
        if (property.id === selection) {
          return {
            id: property.id,
            choice: property.choice
          };
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
    if (player.choice === Model.ROCK.choice) {
      if (computer.choice === Model.SCISSORS.choice) {
        return 1;
      }
    }
    if (player.choice === Model.PAPER.choice) {
      if (computer.choice === Model.ROCK.choice) {
        return 1;
      }
    }
    if (player.choice === Model.SCISSORS.choice) {
      if (computer.choice === Model.PAPER.choice) {
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
