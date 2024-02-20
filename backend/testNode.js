// Server-side (Node.js) code using Nodemailer
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the route to handle form submission
app.post('/send-email', (req, res) => {
    // Extract form data from the request
    const subject = req.body.subject;
    const message = req.body.message;

    // Create a Nodemailer transporter using your email service provider
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '2022.brijesh.sharma@ves.ac.in', // Your email address
            pass: 'Br!jesh123' // Your email password
        }
    });

    // Define email options
    const mailOptions = {
        from: '2022.brijesh.sharma@ves.ac.in', // Sender address
        to: '2022.sairam.konar@ves.ac.in', // Receiver address
        subject: subject,
        text: message
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
