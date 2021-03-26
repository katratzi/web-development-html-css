//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

# examples

var numbers = [3, 56, 2, 48, 5];

# map

Map takes a function, iterates over the items in an array, and returns a new array. 
So could define a function...or use an anonymous one

function double(x) {return 2 * x;}
let d = numbers.map(double))

let d = numbers.map(function(x){return 2 * x;})

# Reduce
var newNumber = numbers.reduce(function(accumulator, currentNumber){
    return accumulator + currentNumber;
});

# find
var newNumber = numbers.find(function(num) {
    return num > 10;
})

# findIndex
var index = numbers.findIndex(function(num) {
    return num > 10;
})