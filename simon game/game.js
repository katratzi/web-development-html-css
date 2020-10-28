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
  // update level each time
  level++;
  $("#level-title").text("Level: " + level);
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
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  animatePress(userChosenColor);
  playSound(userChosenColor);
});
