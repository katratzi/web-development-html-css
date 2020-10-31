//jshint esversion:6
// const fs = require("fs");
// fs.copyFileSync("file1.txt", "file2.txt");

// just run with node index.js
// ctrl c twice to exit or type .exit

// using a couple of npm packages
// install simply with npm init packagename
const superheroes = require("superheroes");
const supervillains = require("supervillains");
var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();
console.log(mySuperheroName + " vs " + mySupervillainName);
