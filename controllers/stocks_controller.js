console.log("-- constollers/stocks_controller.js");

const express = require("express");
const router = express.Router();
const stock = require("../models/stock.js");

var stocks = [
  {
    gld: "1810.23",
    btc: "9250.23",
  },
];


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    console.log("-- stock_controller - router.get /");
    console.log(stocks);

    res.render("index", stocks);
  });


  router.get("/stock", function (req, res) {
    console.log("-- stock_controller - router.get /stock");
    // console.log(stocks);
    // Handlebars requires an object to be sent to the dog handlebars file.
    // Lucky for us, animals[0] is an object!
  
    // 1. send the dog object from the animals array to the dog handlebars file.
    console.log(stocks);
    
    res.render("stock", stocks[0]);
  });

module.exports = router;