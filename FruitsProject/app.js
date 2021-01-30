const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: [true, 'Please check...all fruits need a name']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// first is the name of the collection, then the schema for it
// by convention use the singular...and mongoose cleverly creates it with the multiple
const Fruit = mongoose.model("Fruit", fruitSchema);

// now create the object
const fruit = new Fruit({
    name: "Peachey",
    rating: 8,
    review: "Pretty are delicious."
});

// this then creates it into the collection
// replaces the insert documents stuff in the native driver
// fruit.save();

// create a person schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// the model of a person
const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

// person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 3,
//     review: "Kind of furry"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 6,
//     review: "Juicy but messy"
// });

// const banana = new Fruit({
//     name: "Banananananana",
//     rating: 8,
//     review: "Lots of energy"
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successfully saved all our fruits to the DB");
//     }
// });

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(fruits);
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        })
    }

    // close the connection
    mongoose.connection.close();
});

// update a record
// first part is the filter, second what we want to update
// Fruit.updateOne({ _id: "6015a1867cb2bc0f105ee978" }, { name: "Peach" }, function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successfully updated fruit name");
//     }
// });

// delete works similarly
// can find with name or id or anything
// Fruit.deleteOne({ name: "Peach" }, function (err) {
// Fruit.deleteOne({ _id: "6015a1867cb2bc0f105ee978" }, function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successfully deleted fruit");
//     }
// });

// delete manu
Person.deleteMany({ name: "John" }, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully killed Johns");
    }
});