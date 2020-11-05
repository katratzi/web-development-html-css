const express = require("express");
const app = express();

// we 'get' a message from a user requesting something from us
// often shortened to req, res
app.get("/", function (request, response) {
  //   console.log(request);
  response.send("<h1>hello world</h1>");
});

// start the server up listening on port 3000
// quick debug message as callback so we know it's working
app.listen(3000, function () {
  console.log("server started on port 3000");
});
