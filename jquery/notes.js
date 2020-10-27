// So if you place your javascript links in the
// head section of your html, you need to use this
// function to wait for the docuemnt to be loaded
// - For us we'll stick with placing the javascript
// at the end of the body section
$(document).ready(function () {
  $("h1").css("color", "red");
});


// these are equivalent
document.querySelector("h1");
$("h1");
document.querySelectorAll("button");
$("button");


// can set and also read the values
$("h1").css("color", "green");
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));

// keep seperate of concerns and use classlist
$("h1").addClass("big-title");
$("h1").removeClass("big-title");

// add multiple classes - use space
$("h1").addClass("big-title margin-50");

// find out if we have a class
$("h1").hasClass("margin-50"));

// change the values
$("h1").text("Bye");

// this affects all buttons
$("button").text("Bye");

// instead of innerHTML
$("button").html("<em>Bye</em>");

// altering attributes
$("img").attr("src");

// set the attribute - second arguments are setters
$("a").attr("href", "http://www.bing.com");

// when we add classes to our elements, can get these with
$("h1").attr("class");

// event listeners - adding
$("h1").click(function () {
  console.log("I am clicked");
});

// old javascript
for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "purple";
  });
}

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

// // Adding and removing elements with jQuery
$("h1").before("<button>new</button>");
$("h1").after("<button>new</button>");
// these go inside the h1 tag itself
$("h1").prepend("<button>new</button>");
$("h1").append("<button>new</button>");
// remove
$("button").remove();

// hiding and showing - quite sudden
$("h1").hide();
$("h1").show();
$("h1").toggle();

// less abrupt
$("h1").fadeOut();
$("h1").fadeIn();
$("h1").fadeToggle();

// slide up down and toggle (useful for dropdowns)
$("h1").slideUp();
$("h1").slideDown();
$("h1").slideToggle();

