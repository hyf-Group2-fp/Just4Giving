const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

// testing DB routes

app.use("/", require("./routes/user.js"));
app.use("/", require("./routes/tags.js"));
app.use("/", require("./routes/categories"));
app.use("/", require("./routes/goods.js"));
app.use("/", require("./routes/goodsformany.js"));

// back-end routes

module.exports = app;
