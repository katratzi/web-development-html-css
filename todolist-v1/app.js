const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

// setup body parser and a public directory
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// empty array of todo items
let items = ["Buy food", "Cook Food", "Eat food"];
let workItems = [];

app.get("/", function (req, res) {
    let today = new Date();
    let options = { weekday: 'long', day: 'numeric', month: 'long', };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
    console.log(req.body);
    let item = req.body.newItem;

    // which list does this belong to
    if (req.body.list === "Homework") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
});


// access as localhost:3000/work
app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Homework", newListItems: workItems });
});


app.listen(3000, function () {
    console.log("Server started on port 3000");
});

