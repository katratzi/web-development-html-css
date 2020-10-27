// these are equivalent
document.querySelector("h1");
$("h1");
document.querySelectorAll("button");
$("button");

// can set and also read the values
// $("h1").css("color", "green");
// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));

// keep seperate of concerns and use classlist
$("h1").addClass("big-title");
$("h1").removeClass("big-title");

// add multiple classes - use space
// $("h1").addClass("big-title margin-50");

// find out if we have a class
console.log($("h1").hasClass("margin-50"));
$("h1").text("Bye");

// this affects all buttons
$("button").text("Bye");

// instead of innerHTML
$("button").html("<em>Bye</em>");

// altering attributes
console.log($("img").attr("src"));

// set the attribute - second arguments are setters
$("a").attr("href", "http://www.bing.com");

// when we add classes to our elements, can get these with
$("h1").attr("class");

// event listeners - adding
$("h1").click(function () {
  console.log("I am clicked");
});

// old javascript
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// can add event listeners to all of the buttons
$("button").click(function () {
  $("h1").css("color", "purple");
});

// looking for keypress events
$("input").keypress(function (event) {
  console.log(event.key);
});

// add to whole page using document - no ""
$(document).keypress(function (event) {
  console.log(event.key);
  $("h1").text(event.key); // change h1 to our keypress
});

// using the 'on' method for adding events
$("h1").on("mouseover", function (event) {
  $("h1").css("color", "green");
});
