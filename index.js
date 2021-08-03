var express = require('express');
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var helmet = require("helmet");
var cors = require("cors");
require("dotenv").config();

var app = express();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", routes);

if (process.env.NODE_ENV == "production" || process.env.NODE_ENV == "staging") {
  app.listen(process.env.PORT || 443);
  console.log("Server started ...");
} else {
  app.listen(8080);
  console.log("Server started ...");
}
