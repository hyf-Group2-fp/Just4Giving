const express = require('express');
const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY } = require('../config');

sgMail.setApiKey(SENDGRID_API_KEY);

// initialize express
const app = express();

// send an email to the giver
app.post('/good/sendEmail', async (req, res) => {
    const { to, from, subject, content } = req.body;

    const data = {
        to: to,
        from: from,
        subject: subject,
        html: content,
    };

    console.log(data);
    try {
        await sgMail.send(data);
        res.status(200).send('the Email has been sent successfully!!');
    } catch (err) {
        console.error(err);
    }
});

module.exports = app;
