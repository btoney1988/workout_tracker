// Server Dependencies
const express = require("express");
const bodyParser = require('body-parser');

// Database Connection Request
require('dotenv/config');
const connectDB = require("./config/connectDB.js");
const db = require("./models");

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("/public"));


require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

let PORT = process.env.PORT || 9090;

connectDB()

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});