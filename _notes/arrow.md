var numbers = [3, 56, 2, 48, 5];

// basic form...named function passed as paramneter
function square(x) {
    return x * x;
}

var s = numbers.map(square);


// or can use this same function inline

var s = numbers.map(function square(x) {
    return x * x;
});

// as it's inine usually don't need a name, make it anon
var s = numbers.map(function (x) {
    return x * x;
});


// go one step further...omit function and use fat arrow
var s = numbers.map((x) => {
    return x * x;
});

// if we pass more than one value in...need brackets
var s = numbers.map((x, y) => {
    return x * y;
});

// but if we only have one input...can omit brackets
var s = numbers.map( x => {
    return x * x;
});

// and if we only have a single return statement, can omit return
var s = numbers.map( x => x * x; );