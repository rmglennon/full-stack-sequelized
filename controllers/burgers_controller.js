// set up the controller for the app, including routes

var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

//Create the router and the routes

// get request to select all and render the page with the handlebars index
router.get("/", function(req, res) {
  
});

// post request to add a new burger and set its devoured value to false 
router.post("/api/burgers", function(req, res) {

});

// put request to update the burger that was clicked in the list to be devoured: true
router.put("/api/burgers/:id", function(req, res) {

  });
});

module.exports = router;