const { response } = require("express");
const express = require("express");
const https = require("https");
const { dirname } = require("path");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log("post received");
});

// start the server
app.listen(3000, function () {
  console.log("server running on port 3000");
});

// const query = "Paris";
//   const apiKey = "26c0004e30b5b9fdb93a003835d2a8b7";
//   const units = "metric";
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?appid=" +
//     apiKey +
//     "&q=" +
//     query +
//     "&units=" +
//     units;
//   https.get(url, function (response) {
//     console.log(response.statusCode);
//     response.on("data", function (data) {
//       // convert into javascript object
//       const weatherData = JSON.parse(data);
//       // digging into the json data
//       const weatherTemperature = weatherData.main.temp;
//       const weatherDescription = weatherData.weather[0].description;
//       // grab the icon
//       const iconId = weatherData.weather[0].icon;
//       const iconUrl = "http://openweathermap.org/img/wn/" + iconId + "@2x.png";
//       console.log(iconUrl);
//       res.write("<p>The weather is currently " + weatherDescription + "</p>");
//       res.write(
//         "<h1>The temperature in " +
//           query +
//           " is " +
//           weatherTemperature +
//           " degrees Celsius</h1>"
//       );
//       res.write("<img src=" + iconUrl + ">");
//       res.send();
//     });
//   });
