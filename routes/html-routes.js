console.log("-- constollers/html-routes.js");


// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

var stocks = [
    {
      gld: "1810.23",
      btc: "9250.23",
    },
  ];
  
  app.get("/", function (req, res) {
    console.log("-- html-routes - app.get /");
    console.log(stocks);
    res.render("login", stocks);
  });

  app.get("/stock", function (req, res) {
    console.log("-- html-routes - app.get / stock");
    console.log(stocks);
    res.render("stock", stocks[0]);
  });


};
