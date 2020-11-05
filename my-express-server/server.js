const express = require("express");
const app = express();

// we 'get' a message from a user requesting something from us
// often shortened to req, res
app.get("/", function (request, response) {
  //   console.log(request);
  response.send("<h1>hello world</h1>");
});

// contact route
app.get("/contact", function (request, response) {
  //   console.log(request);
  response.send("contact me at ric@clifford.com");
});

// about route
app.get("/about", function (request, response) {
  response.send("I'm Richard.  I'm a <em>pro</em>grammer.  I like Star Trek");
});

// about hobbies
app.get("/hobbies", function (request, response) {
  response.send("Hot chicks and Star Trek");
});

// start the server up listening on port 3000
// quick debug message as callback so we know it's working
app.listen(3000, function () {
  console.log("server started on port 3000");
});

// so we don't have to keep restarting node
// install npm instal -g nodemon
// run as
// nodemon server.js
