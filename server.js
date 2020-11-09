const express = require("express");

//Define port the server will be listening on.
const PORT = process.env.PORT || 3306;

const app = express();



//App is listening...
app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});