// add dependencies 
var exphbs = require("express-handlebars");
var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 8080

//sets up the Express app to handle data parsing, middle handler

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");



//import routes and give the server access to them.
var routes = require("./controllers/burgers_controller")

app.use(routes);
//static directory to be served
app.use(express.static("asset"))

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT)
});