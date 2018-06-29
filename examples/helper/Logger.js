const createCsvWriter = require('csv-writer').createObjectCsvWriter;
require('colors');
const { messageTypes } = require('../const/');
const { ERROR, WARNING, SUCCESS, INFO } = messageTypes;
let csvWriter = null;

module.exports = class Logger {
    constructor(path = null, header = null) {
        if (path != null && header != null) {
            csvWriter = createCsvWriter({
                path: path,
                header: header
            });
        }
    }

    consoleWrite(message, type) {
        let colorMessage;

        switch (type) {
            case ERROR:
                colorMessage = `[ERROR] ${message.red}`;
                break;
            case WARNING:
                colorMessage = `[WARNING] ${message.yellow}`;
                break;
            case SUCCESS:
                colorMessage = `[SUCCESS] ${message.green}`
                break;
            default:
                colorMessage = `[INFO] ${message.blue}`
        }
        console.log(colorMessage.cyan);
    }

    csvWrite(record) {
        csvWriter.writeRecords(record)
            .then(() => {
                console.log('...Done');
            });
    }
}

