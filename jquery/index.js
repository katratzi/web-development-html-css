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
