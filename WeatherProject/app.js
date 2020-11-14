const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello world");
});

// start the server
app.listen(3000, function () {
  console.log("server running on port 3000");
});
