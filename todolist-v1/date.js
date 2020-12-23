
// when a module is included, with a require, it runs the code
// console.log(module);

// here we can export a simple string and log it in the app.js
// with a console.log
// module.exports = "Hello World";
// module.exports = getDate;

// export an object with two functions
// module.exports.getDate = getDate;
// module.exports.getDay = getDay;
// console.log(exports.module);

// here we bind the anonymous function to our exported object
// exports is short for module.exports
exports.getDate = function () {
    const today = new Date();

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };

    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {
    const today = new Date();

    const options = {
        weekday: 'long',
    };

    return today.toLocaleDateString("en-US", options);
}
