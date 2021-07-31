import express from "express";
var bodyParser = require('body-parser')
import routes from "./routes/routes.js";
import helmet from "helmet";
import cors from "cors";
require("dotenv").config();

var app = express();
app.use(cors());
app.use(helmet());
app.use(xss());
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
  app.listen(process.env.PORT || 443);
  console.log("Server started ...", process.env.PORT);
}
