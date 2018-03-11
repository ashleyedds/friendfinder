//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Configure express
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './app/public')));

//Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, () => {
    console.log(`Your new best friend is waiting on port ${PORT}`)
});