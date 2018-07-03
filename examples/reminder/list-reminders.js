require('colors');
const fs = require('fs');
const readLineSync = require('readline-sync');
const { REMINDER_OPTIONS } = require('../const');
const { JSON_WHITESPACE, NO_CHOICE_MADE } = REMINDER_OPTIONS;
const { reminders } = require('../helper/.reminder.json');

if (reminders.readLineSync === 0) {
    console.log('No reminders!');
    process.exit();
}

const index = readLineSync.keyInSelect(reminders, 'What reminder have you deal with? ');

if (index === NO_CHOICE_MADE) {
    console.log('Process interrupted');
    process.exit(0);
}

console.log(`You removed '${reminders[index]}'`);
reminders.splice(index, 1);

fs.writeFileSync(`../helper/.reminder.json`,
    JSON.stringify({reminders}, null, JSON_WHITESPACE));

