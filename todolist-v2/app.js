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

app.get("/", function (req, res) {

  // check what's in our items collection
  Item.find({}, function (err, foundItems) {
    // if empty add some default items
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log("Success, default items saved to DB");
          // done inserting...redirect to home again
          res.redirect("/");
        }
      });
    }
    else {
      // render the page of items please
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  });

});

app.post("/", function (req, res) {

  const itemName = req.body.newItem;
  const item = new Item({
    name: itemName
  });

  // save to db, shortcut method instead of insert
  item.save();
  res.redirect("/");
});

// delete post request from checkbox
app.post("/delete", function (req, res) {

  const checkedItemId = req.body.checkbox;
  Item.findByIdAndDelete(checkedItemId, function (err) {
    if (!err) {
      console.log(`Successfully deleted _id ${checkedItemId}`);
    }
  });
  res.redirect("/");
});

app.get("/:customListName", function (req, res) {
  const customListName = req.params.customListName;
  console.log(customListName);
  res.redirect("/");
});

// app.get("/work", function (req, res) {
//   res.render("list", { listTitle: "Work List", newListItems: workItems });
// });

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
