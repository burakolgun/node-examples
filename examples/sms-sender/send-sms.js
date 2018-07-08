const config = require('./config.json');
const readLineSync = require('readline-sync');
const Twilio = require('twilio');

const {
    TWILIO_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER,
    TO
} = config

const client = new Twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

const languages = [
    'nodejs',
    'javascript',
    'PHP',
    'GO',
    'react',
    'angular'
];

const index = readLineSync.keyInSelect(languages, 'Which language is your prefers');

if (index === -1) {
    process.exit(0);
}

const smsMessage = {
    body: `Hi bro, my prefer language for you ${languages[index]}`,
    from: TWILIO_PHONE_NUMBER,
    to: TO
};

console.log(`Sending message ${smsMessage.body}`);

client.messages.create(smsMessage)
    .then(({sid}) => {
        console.log('Sms sent. Id:', sid)
    })
    .catch((error) => {
        console.error('Error sending Twilio message', error);
    });