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

  // Each of the below routes just handles the HTML page that the user gets sent to.

//   // index route loads view.html
//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/view.html"));
//   });

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
    // console.log(stocks);
    // Handlebars requires an object to be sent to the dog handlebars file.
    // Lucky for us, animals[0] is an object!
  
    // 1. send the dog object from the animals array to the dog handlebars file.
    console.log(stocks);
    
    res.render("stock", stocks[0]);
  });


};
