var express = require("express");
var serveStatic = require("serve-static");
var bodyparser = require("body-parser");
var routes = require("./routes/routes");
var mongoose = require("mongoose");
var cron = require("node-cron");
const https = require("https");
const fs = require("fs");
const querystring = require("querystring");
const helmet = require("helmet");
const btoa = require("btoa");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const constants = require("./utils/constant");
require("dotenv").config();

var app = express();
mongoose.connect("mongodb://localhost/createVin", {
    useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

// app.use(express.static(__dirname + "/public"));
// app.set("views", __dirname + "/public/views");
// app.engine("html", require("ejs").renderFile);
// app.set("view engine", "html");

app.use(cors());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(
    bodyparser.json({
        limit: "100mb",
    })
);
app.use(
    bodyparser.urlencoded({
        limit: "100mb",
    })
);
app.use("/api", routes);

// app.use(
//     serveStatic("./app", {
//         index: ["index.html"],
//     })
// );

// app.use("*", function (req, res) {
//     res.render("error.html");
// });

if (process.env.NODE_ENV == "production" || process.env.NODE_ENV == "staging") {
    app.listen(process.env.PORT || 443);
    console.log("Server started ...");
} else {
    app.listen(process.env.PORT || 443);
    console.log("Server started ...", process.env.PORT);
}
