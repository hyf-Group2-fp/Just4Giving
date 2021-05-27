const express = require('express');
const User = require('../models/User.js');
// initialize express
const app = express();

// get a giver by id
app.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const giver = await User.findOne({
            where: {
                user_id: id,
            },
        });
        if (giver === null) {
            return res.status(404).json({
                message: `nothing found`,
            });
        } else {
            return res.status(200).json({
                message: 'success',
                giver: giver,
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('server error');
    }
});
module.exports = app;
