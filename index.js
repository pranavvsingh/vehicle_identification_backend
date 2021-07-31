var express = require('express');
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var helmet = require("helmet");
var cors = require("cors");
require("dotenv").config();

var app = express();
app.use(cors());
app.use(helmet());
app.use(
  bodyParser.json({
    limit: "100mb",
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "100mb",
  })
);

app.use("/api/v1", routes);

if (process.env.NODE_ENV == "production" || process.env.NODE_ENV == "staging") {
  app.listen(process.env.PORT || 443);
  console.log("Server started ...");
} else {
  app.listen(process.env.PORT || 8080);
  console.log("Server started ...");
}
