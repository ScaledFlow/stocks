console.log("-- constollers/stocks_controller.js");

const express = require("express");
const router = express.Router();
const stock = require("../models/stock.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    console.log("-- stock_controller - router.get /");

    //res.render("index", "test");
  });

module.exports = router;