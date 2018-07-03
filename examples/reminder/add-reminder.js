const fs = require('fs');
const { REMINDER_OPTIONS } = require('../const');
const { JSON_WHITESPACE } = REMINDER_OPTIONS;
const { reminders } = require('../helper/.reminder.json');

const args = process.argv.slice(2);
let reminder = args[0];

if (reminder === undefined) {
    console.log("Pass a remider e.g, Hit the lazy man");
    process.exit(0);
}

reminder = reminder.trim();

const hasReminderAllready = reminders.indexOf(reminder) > -1;

if (hasReminderAllready) {
    console.log(`Already have the reminder ${reminder} set`);
    process.exit(0);
}

reminders.push(reminder);
fs.writeFileSync(`${__dirname}/../helper/.reminder.json`, JSON.stringify({ reminders }, null, JSON_WHITESPACE));
console.log(reminders);
console.log('YES! you are added a reminder!!');

