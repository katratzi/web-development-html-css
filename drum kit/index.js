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
  allDrumButtons[i].addEventListener("click", handleClick);
}
