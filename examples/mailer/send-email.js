const config = require('./config.json');
const nodemailer = require('nodemailer');
const args = process.argv.slice(2);
const REQUIRED_FIELDS_COUNT = 2;

if (args.length !== REQUIRED_FIELDS_COUNT) {
    console.log(`Two argument required: subject and body e.g. node send-email.js "Where\'s my tea" "So yeah where is it?"`);
    process.exit(0);
}

const [subject, body] = args;
const { HOST, PORT, FROM_EMAIL, TO_EMAIL } = config;
const { USERNAME, PASSWORD } = config.AUTH;

const transporter = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    secure: false,
    auth: {
        user: USERNAME,
        pass: PASSWORD
    }
});

const message = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject,
    body,
    html: <p>${body}</p>
};

transporter.sendMail(message, (err, info) => {
    if (err) {
        console.error(`Error occurred: ${error.message}`);
        return process.exit(0);
    }

    return console.log('Message sent: %s', info.messageId);
});
