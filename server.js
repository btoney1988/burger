const express = require("express");

//Define port the server will be listening on.
const PORT = process.env.PORT || 3306;

const app = express();

app.use(express.static(__dirname + "/public"));

const expressHandleBars = require("express-handlebars");

app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controller.js");

app.use(routes);

//App is listening...
app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});