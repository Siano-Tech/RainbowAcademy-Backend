const nodemailer = require("nodemailer");
const {email, password} = require('../config');

// create reusable transporter object using the default SMTP transport
let EmailService = nodemailer.createTransport({
    service: 'gmail',
    user: 'smpt.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'Login',
        user: email, // email
        pass: password, // password
    },
});

module.exports = EmailService;