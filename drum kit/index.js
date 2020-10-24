// document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  console.log("I got clicked");
}

// // written as anonymous function
// document.querySelector("button").addEventListener("click", function () {
//     console.log("I got clicked");
//   });

var allDrumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < allDrumButtons.length; i++) {
  //   allDrumButtons[i].addEventListener("click", handleClick);
  allDrumButtons[i].addEventListener("click", function () {
    // playing audio
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();

    // use the 'this' keyword to change color
    console.log(this);
    console.log(this.innerHTML);
    this.style.color = "white";
  });
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
