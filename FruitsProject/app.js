const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// first is the name of the collection, then the schema for it
// by convention use the singular...and mongoose cleverly creates it with the multiple
const Fruit = mongoose.model("Fruit", fruitSchema);

// now create the object
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

// this then creates it into the collection
// replaces the insert documents stuff in the native driver
fruit.save();