// document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  console.log("I got clicked");
}

// // written as anonymous function
// document.querySelector("button").addEventListener("click", function () {
//     console.log("I got clicked");
//   });

function playDrum(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(key);
      break;
  }
}

var allDrumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < allDrumButtons.length; i++) {
  //   allDrumButtons[i].addEventListener("click", handleClick);
  allDrumButtons[i].addEventListener("click", function () {
    //play sound depending on key
    var buttonInnterHtml = this.innerHTML;
    playDrum(buttonInnterHtml);
    buttonAnimation(buttonInnterHtml);
  });
}

// add event listener for whole document to get key presses
document.addEventListener("keypress", function (event) {
  console.log(event);
  playDrum(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// passing functions as arguents
// known as higher order functions
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

// constructor function
// also known as a factory function
// not Capital letter for name
function HouseKeeper(name, years, cleaning) {
  (this.name = name), (this.years = years), (this.cleaning = cleaning);
}
// create the object
var hk1 = new HouseKeeper("angela", 12, ["beds", "baths"]);

//  adding a function to the object
function HouseKeeperAgain(name, years, cleaning) {
  (this.name = name),
    (this.years = years),
    (this.cleaning = cleaning),
    (this.clean = function () {
      alert("performing cleaning");
    });
}
