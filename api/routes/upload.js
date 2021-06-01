const express = require('express');
const cors = require('cors');
const multer = require('multer');

// initialize express
const app = express();

//const dest = "./public/uploads/images";
const dest = './client/public/assets/images/uploads';
var returnfile;
var msg = '';
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        //call back function
        cb(null, dest);
    },
    filename: (req, file, cb) => {
        returnfile = file.originalname;
        // returnfile = `${Date.now()}--${file.originalname}`;
        cb(null, returnfile);
    },
});

const upload = multer({
    storage: fileStorageEngine,
    limits: { fileSize: 50000000 },
    fileFilter: (res, file, cb) => {
        if (
            file.mimetype !== 'image/png' &&
            file.mimetype !== 'image/jpg' &&
            file.mimetype !== 'image/jpeg'
        ) {
            return cb(null, false);
        }
        cb(null, true);
    },
});

//image is the field's name
app.post('/upload', upload.single('image'), async (req, res) => {
    if (req.file === undefined) {
        res.status(422).send('file not allowed');
    } else {
        res.status(200).send(`${dest}/${returnfile}`);
    }
});

module.exports = app;
