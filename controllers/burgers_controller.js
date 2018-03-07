// set up the controller for the app, including routes

var express = require("express");
var router = express.Router();

// import the models folder to use its database functions and Sequelize setup
var db = require("../models");

// get request to select all and render the page with the handlebars index
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(dbBurger) {
    var hbsObject = {
      burgers: dbBurger
    };
    res.render("index", hbsObject);
  });
});

// post request to add a new burger and set its devoured value to false 
router.post("/api/burgers", function(req, res) {

  db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function(dbBurger) {
      res.json({
        id: result.insertId
      });
    })
    .catch(function(err) {
      res.json(err);
    });
});

// put request to update the burger that was clicked in the list to be devoured: true
router.put("/api/burgers/:id", function(req, res) {
  db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;