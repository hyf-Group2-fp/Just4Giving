const express = require("express");
const User = require("../models/User.js");
const cors = require('cors');
//validation
const {
    signupNeederValidation
} = require('../utils/signupNeederValidation');

// initialize express
const app = express();

app.post("/needer/signup", async (req, res) => {
    const {
        first_name,
        last_name,
        email,
        password,
        street,
        phone,
        age,
        is_giver,
        is_needer,
        description,
        agreement,
    } = req.body;

    //validation
    const {
        error
    } = signupNeederValidation(req.body);

    if (error) {
        res.status(400).send(error.details[0].message).end();
    } else {

        try {
            const name = await User.create({
                first_name,
                last_name,
                email,
                password,
                street,
                phone,
                age,
                is_giver,
                is_needer,
                description,
                agreement,
            });
            console.log(name);
            res.status(200).send(
                `a new user : ${first_name} ${last_name} has been created!`
            );
        } catch (err) {
            console.error(err);
            if (err.errors) {
                console.log(' error', err);
                switch (err.errors[0].path) {
                    case 'email':
                        res.status(401).send({
                            status: 401,
                            message: ' Your email is not valid'
                        });
                        break;
                    case 'password':
                        res.status(401).send({
                            status: 401,
                            message: 'Password length has to be at least 5 characters'
                        });
                        break;
                }

            }
        }
    }

});


module.exports = app;