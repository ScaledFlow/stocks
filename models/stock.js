console.log("-- models/stock.js");

// const orm = require("../config/orm.js");

// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Stock = sequelize.define("stocks", {
  ticker: Sequelize.STRING,
  company: Sequelize.STRING,
  price: Sequelize.STRING,
});

// Syncs with DB
Stock.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Stock;




// module.exports = stock;