console.log("-- models/stock.js");

// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Stock" model that matches up with DB
var Stock = sequelize.define("stocks", {
  ticker: Sequelize.STRING,
  company: Sequelize.STRING,
  price: Sequelize.STRING,
});

// Syncs with DB
Stock.sync();

// Creates a "User" model that matches up with DB
var Stock = sequelize.define("users", {
    email: Sequelize.STRING,
    password: Sequelize.STRING,
  });
  
  // Syncs with DB
  Stock.sync();


module.exports = Stock;
