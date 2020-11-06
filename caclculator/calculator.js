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

// use __dirname for the path where our server is
app.get("/bmicalculator", function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/bmiCalculator.html");
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

// post from BMI calculator
app.post("/bmicalculator", function (req, res) {
  console.log(req.body);
  console.log("Weight." + req.body.weight);
  console.log("Height." + req.body.height);

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var result = weight / (height * height);
  res.send("Your BMI is " + result.toFixed(1));
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
