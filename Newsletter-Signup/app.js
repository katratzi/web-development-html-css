const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { json } = require("body-parser");
const app = express();

const secrets = require("./secrets.js");

app.use(bodyParser.urlencoded({ extended: true }));

// in order to serve up static files, need to set up express with a particular folder
app.use(express.static("public"));

app.get("/", function (req, res) {
  //   res.send("Hello world");
  console.log(secrets.PI);
  res.sendFile(__dirname + "/signup.html");
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.post("/", function (req, res) {
  // get the data
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  console.log(`Name is ${firstName} ${lastName} and ${email}`);

  // create object format for our api call
  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  // create json string
  const jsonData = JSON.stringify(data);

  const url = "https://us7.api.mailchimp.com/3.0/lists/c7d2e88aeb";
  const options = {
    method: "POST",
    auth: `helloworld:${secrets.MAILCHIMPKEY}`,
  };

  // sent the request to mailchimp then check the status code
  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      if (response.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
      }
      else {
        res.sendFile(__dirname + "/failure.html");
      }
      const parsedData = JSON.parse(data);
      // console.log(JSON.parse(data));
    });
    console.log("hello");
  });

  request.write(jsonData);
  request.end();
});

// for running on heroku, use their port OR use 3000 for local
app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});

// list id
// c7d2e88aeb
// api key
// 882f4a160ac0a42a81f66445ae4cbd35-us7
