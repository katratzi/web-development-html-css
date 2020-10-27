var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

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
  // play a sound
  var sound = new Audio("sounds/" + randomChosenColor + ".mp3");
  sound.play();
}

// nextSequence();
$(".btn").on("click", function () {
  console.log($(this).attr("id"));
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  //   var sound = new Audio("sounds/" + "blue" + ".mp3");
  //   sound.play();
  //   nextSequence();
});
