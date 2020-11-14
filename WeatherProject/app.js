const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=26c0004e30b5b9fdb93a003835d2a8b7&q=London&units=metric";
  https.get(url, function (response) {
    console.log(response);
  });
  res.send("Hello world");
});

// start the server
app.listen(3000, function () {
  console.log("server running on port 3000");
});
