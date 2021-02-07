//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// connect to the database
mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true, useUnifiedTopology: true });

const itemsSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({ name: "Do the dishes" });
const item2 = new Item({ name: "Wash the bedsheets" });
const item3 = new Item({ name: "Take over the world" });

const defaultItems = [item1, item2, item3];

// Item.insertMany(defaultItems, function (err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Success, default items saved to DB");
//   }
// })




app.get("/", function (req, res) {

  Item.find({}, function (err, foundItems) {
    res.render("list", { listTitle: "Today", newListItems: foundItems });
  });

});

app.post("/", function (req, res) {

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
