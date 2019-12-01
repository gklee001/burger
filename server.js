// add dependencies 
var exphbs = require("express-handlebars");
var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 8080

//sets up the Express app to handle data parsing, middle handler

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//static directory to be served
app.use(express.static("app/"))

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT)
});
