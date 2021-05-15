const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
var cors = require('cors');

const app = express();
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/home.js"));
app.use("/", require("./routes/login.js"));
app.use("/", require("./routes/signup.js"));
app.use("/", require("./routes/tags.js"));
app.use("/", require("./routes/categories"));
// app.use("/", require("./routes/goods.js"));

module.exports = app;
