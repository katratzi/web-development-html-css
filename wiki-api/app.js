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

//////// Requests targeting ALL routes /////////

// chained route handling
app.route("/articles")
    .get(function (req, res) {
        Article.find(function (err, foundArticles) {
            if (!err) {
                res.send(foundArticles);
            }
            else {
                res.send(err);
            }
        });
    })
    .post(function (req, res) {

        // create a new article
        const article = new Article({
            title: req.body.title,
            content: req.body.content,
        });

        // save and send response
        article.save(function (err) {
            if (!err) {
                res.send("Successfully added a new article"); // send success
            } else {
                res.send(err); // send back the error
            }
        });
    })
    .delete(function (req, res) {
        Article.deleteMany(function (err) {
            if (!err) {
                res.send("Successfully deleted all articles"); // send success
            }
            else {
                res.send(err);
            }
        });
    });

//////// requests targeting a SPECIFIC route /////////

// chained route handling
app.route("/articles/:articleTitle")
    .get(function (req, res) {
        const articleTitle = req.params.articleTitle;
        Article.findOne({ title: articleTitle }, function (err, foundArticle) {
            if (foundArticle) {
                res.send(foundArticle);
            }
            else {
                res.send("No articles matching that title found.");
            }
        });
    })
    .post()
    .delete();


// start up the server up
app.listen(3000, function () {
    console.log('Server started on port 3000');
});