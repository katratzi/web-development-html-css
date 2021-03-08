const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// database setup - connection
mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });
// database schema
const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});
// the model
const Article = mongoose.model("Article", articleSchema);

// home route
app.get("/", function (req, res) {
    res.send('Hello World!');
});

// start up the server up
app.listen(3000, function () {
    console.log('Server started on port 3000');
});