const express = require("express");
const cors = require('cors');
const multer = require("multer");


// initialize express
const app = express();
app.use(cors());

const dest = "./public/images/uploads";
var returnfile;
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        //call back function
        cb(null, dest)
    },
    filename: (req, file, cb) => {
        returnfile = `${Date.now()}--${file.originalname}`;
        cb(null, returnfile);
    },
});

const upload = multer({storage: fileStorageEngine});

//image is the field's name
app.post("/upload", upload.single("image"), async (req, res) => {
    console.log(req.image);
    res.send(`${dest}/${returnfile}`);
});

module.exports = app;