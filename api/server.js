const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require('cors');

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
app.use("/", require("./routes/categories.js"));
<<<<<<< HEAD
app.use("/", require('./routes/signupneeder.js')) ;
app.use("/", require("./routes/goods.js"));
app.use("/", require("./routes/goodsformany.js"));

=======
app.use("/", require('./routes/goodForMany.js')) ;
app.use("/", require('./routes/signupneeder.js')) ;
>>>>>>> ca2e7364aecda4df27002683c7a7ce6a0c08e559

module.exports = app;
