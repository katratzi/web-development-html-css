const express = require("express");
const app = express();

// start the server up listening on port 3000
// quick debug message as callback so we know it's working
app.listen(3000, function () {
  console.log("server started on port 3000");
});
