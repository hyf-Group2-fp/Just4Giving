const express = require("express");

// initialize express
//const app = express();

app.get("/upload/test", async (req, res) => {
    res.send(
        `<body>
            <form action="/api/upload" method="POST" enctype="multipart/form-data">
                <input type="file" name="image">
                <button type="submit">Submit</button>
            </form>   
        </body>`
    );
});

module.exports = app;