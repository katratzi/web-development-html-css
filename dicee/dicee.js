function rollDice() {
  var roll = Math.random() * 6;
  roll = Math.floor(roll) + 1;
  return roll;
}

var diceRoll1 = rollDice();
console.log("roll 1 is " + diceRoll1);

// debug
document.querySelector(".img1").getAttribute("src");
// set to new image
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + diceRoll1 + ".png");

// repeat for dice 2
var diceRoll2 = rollDice();
console.log("roll 2 is " + diceRoll2);

// debug
document.querySelector(".img2").getAttribute("src");
// set to new image
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + diceRoll2 + ".png");

if (diceRoll1 > diceRoll2) {
  document.querySelector("h1").innerText = "🚩 Player 1 Wins";
} else if (diceRoll2 > diceRoll1) {
  document.querySelector("h1").innerText = "Player 2 Wins 🚩";
} else if (diceRoll2 === diceRoll1) {
  document.querySelector("h1").innerText = "Draw";
}
