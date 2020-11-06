const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// can use bodyParser.text, .json...we'll use
app.use(bodyParser.urlencoded({ extended: true }));

// use __dirname for the path where our server is
app.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body);
  console.log("Num1." + req.body.num1);
  console.log("Num2." + req.body.num2);

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
