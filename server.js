const express = require("express");

//Define port the server will be listening on.
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controllers.js");

app.use(routes);

//App is listening...
app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});