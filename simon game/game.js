var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameHasStarted = false;
var level = 0;

// start up - ask for keypress
$("#level-title").text("Press A Key to Start");

// on the first keypress, start the level
$(document).on("keypress", function () {
  if (!gameHasStarted) {
    nextSequence();
    gameHasStarted = true;
    $("#level-title").text("Level: " + level);
  }
});

// next sequence in game
function nextSequence() {
  // update level each time
  level++;
  $("#level-title").text("Level: " + level);
  //reset players sequence
  userClickedPattern = [];
  // get a random color
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  // add to our pattern
  gamePattern.push(randomChosenColor);
  // and animate this button
  $("#" + randomChosenColor)
    .animate({ opacity: 0.1 }, 100)
    .animate({ opacity: 1 }, 100);
  playSound(randomChosenColor);
}

// helper for playing back sounds
function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

// player input - animate button
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// player clicking on buttons
$(".btn").on("click", function () {
  // haven't started yet
  if (!gameHasStarted) {
    return;
  }
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  animatePress(userChosenColor);
  playSound(userChosenColor);

  // check if we match the pattern
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] != gamePattern[currentLevel]) {
    console.log("wrong");
    // wrong sound (small delay so doesn't overlap)
    // flash red style for game-over
    setTimeout(function () {
      playSound("wrong");
      resetGame();
      $("body").addClass("game-over");
    }, 200);
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 400);
  } else {
    console.log("right");
    // correctly matched sequence. add new pattern
    if (currentLevel == gamePattern.length - 1) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
}

// show game over message, and clear our game data ready for new level
function resetGame() {
  $("#level-title").text("Game Over, press any key to restart");
  gamePattern = [];
  level = 0;
  gameHasStarted = false;
}
