
// when a module is included, with a require, it runs the code
// console.log(module);

// here we can export a simple string and log it in the app.js
// with a console.log
// module.exports = "Hello World";
// module.exports = getDate;

// export an object with two functions
module.exports.getDate = getDate;
module.exports.getDay = getDay;
console.log(exports.module);

function getDate() {
    let today = new Date();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };

    let day = today.toLocaleDateString("en-US", options);

    return day;
}

function getDay() {
    let today = new Date();

    let options = {
        weekday: 'long',
    };

    let day = today.toLocaleDateString("en-US", options);

    return day;
}
