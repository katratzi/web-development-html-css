// So if you place your javascript links in the
// head section of your html, you need to use this
// function to wait for the docuemnt to be loaded
// - For us we'll stick with placing the javascript
// at the end of the body section
$(document).ready(function () {
  $("h1").css("color", "red");
});
