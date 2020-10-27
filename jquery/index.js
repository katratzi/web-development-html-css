// $("button").on("click", function () {
//   $("h1").animate({ opacity: 0.5 });
//   $("h1").animate({ margin: "20%" });
// });

// can only animate with values that have a numeric value

// can chain animations together
$("button").on("click", function () {
  $("h1").slideUp(2000).slideDown().animate({ opacity: 0.5 });
});
