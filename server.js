// Configuration  
var express = require("express");
var app = express();
var port = 5000;
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");





// Express Setting
app.use(express.static(path.join(__dirname, "/public/dist/public")));
app.set("views", path.join(__dirname, "./views"));
app.use(bodyParser.json());




//Mongoose Setting
mongoose.connect("mongodb://localhost/my_author");

mongoose.Promise = global.Promise;




//Routing 
require("./server/config/routes")(app);




// Server Up
const server = app.listen(1000, function(){
    console.log('Listneing on port 1000');
});