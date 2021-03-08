const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.get("/", function (req, res) {
    res.send('Hello World!');

});

app.listen(3000, function () {
    console.log('Server started on port 3000');
});