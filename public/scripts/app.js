// Model needs outside event handler because more than one click.
// Need objects for player and computer because need to update player with the selections.
var model = {
  ROCK:     {id: 1, name: 'rock'},
  PAPER:    {id: 2, name: 'paper'},
  SCISSORS: {id: 3, name: 'scissors'},
  idForName: function (name) {
    // return model[name.toUpperCase()].id;
    var property = model[name.toUpperCase()];
    return {
      id: property.id,
      name: property.name
    };
  },
  randomId: function () {
    // return Math.floor(Math.random() * 3 + 1);
    var computerSelection = Math.floor(Math.random() * 3 + 1);
    for (option in model) {
      if (model.hasOwnProperty(option)) {
        var property = model[option.toUpperCase()];
        if (property.id === computerSelection) {
          return {
            id: property.id,
            name: property.name
          };
        }
      }
    }
  }
};

function compare (player, computer) {
  // console.log('Player: ' + player.name);
  console.log(player);
  console.log(computer);
  // console.log(model.ROCK);
  // returns true, false, or -1
  if (player.id === computer.id) {
    console.log('Tie!');
    return false;
  }
  else return true;
}

// Basically our `function main`
$('#game').on('click', '.selection', function (event) {
  event.preventDefault(); // whatever that does

  // var playerOne, playerTwo;
  var playerOne = model.idForName($(this).text());
  var playerTwo = model.randomId();
  var winner = compare(playerOne, playerTwo);
  if (winner) {
    // update accordingly
    console.log('Winner!');
  }
  // else they tied.

  /*
    click choice
    store it
    choose for computer
    compare
    update
  */


  //TODO: What if there's a tie?
  // var tie = if (compare() === -1) // or something
  // if (!tie) // stuff
  // updateView(compare($(this).text(), randomSelection()));

});
