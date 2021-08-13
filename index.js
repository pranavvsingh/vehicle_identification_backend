var express = require('express');
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

  // httpsServer.listen(443, () => {
  //     console.log("HTTPS Server running on port 443");
  // });
} else {
  app.listen(process.env.PORT || 443);
  console.log("Server started ...");
}


// if (process.env.env == "production" || process.env.env == "staging") {
//   app.listen(process.env.PORT || 443);
//   console.log("Server started ...");
// } else {
//   app.listen(8081);
//   console.log("Server started ...");
// }
