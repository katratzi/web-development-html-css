const { response } = require("express");
const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=26c0004e30b5b9fdb93a003835d2a8b7&q=London&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      // convert into javascript object
      const weatherData = JSON.parse(data);
      // digging into the json data
      const weatherTemperature = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      // grab the icon
      const iconId = weatherData.weather[0].icon;
      const iconUrl = "http://openweathermap.org/img/wn/" + iconId + "@2x.png";
      console.log(iconUrl);
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write(
        "<h1>The temperature in London is " +
          weatherTemperature +
          " degrees Celsius</h1>"
      );
      res.write("<img src=" + iconUrl + ">");
      res.send();
    });
  });
});

// start the server
app.listen(3000, function () {
  console.log("server running on port 3000");
});
