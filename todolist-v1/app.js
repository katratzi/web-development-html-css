const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// setup body parser and a public directory
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    var today = new Date();
    if (today.getDay() === 6 || today.getDay() === 0) {
        res.write("<h1>Yay! It's the weekend</h1>");
        res.send();
    }
    else {
        // write html sequentially then send
        res.write("<h1>It is not the weekend</h1>")
        res.write("<p>Oh dear :( work today</p>");
        res.send();
    }
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});

