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
      // this data looks like byte info
      // we can view this at https://cryptii.com/ (hex to text)
      console.log(data);
      // let's convert to a javascript object by parsing
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      // opposite of this is to use stringify
      const bio = {
        Name: "Richard",
        FavouriteFood: "Pancakes",
      };
      console.log(JSON.stringify(bio));

      // digging into the json data
      const weatherTemperature = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      console.log(weatherTemperature);
      console.log(weatherDescription);
    });
  });
  res.send("Hello world." + response.statusCode);
});

// start the server
app.listen(3000, function () {
  console.log("server running on port 3000");
});
