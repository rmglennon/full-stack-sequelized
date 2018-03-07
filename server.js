var express = require("express");
var bodyParser = require("body-parser");
require('dotenv').config();

var PORT = process.env.PORT || 3000;

var app = express();

// add models for syncing
var db = require("./models");

// serve static content for the app and set up body-parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// set up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// sync sequelize models and start the server listening
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});