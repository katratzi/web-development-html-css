const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// in order to serve up static files, need to set up express with a particular folder
app.use(express.static("public"));

app.get("/", function (req, res) {
  //   res.send("Hello world");
  res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
