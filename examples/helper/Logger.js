const createCsvWriter = require('csv-writer').createObjectCsvWriter;
colors = require('colors');
const { messageTypes } = require('../const');
const { ERROR, WARNING, SUCCESS, INFO } = messageTypes;
let csvWriter = null;

module.exports = class Logger {
    constructor(path = null, header = null) {
        let color = 'blue';
        let message = '';

        if (path != null && header != null) {
            csvWriter = createCsvWriter({
                path: path,
                header: header
            });
        }
    }

    consoleWrite(message, type) {
        switch (type) {
            case ERROR:
                this.message = `[ERROR] ${message}`
                this.color = 'red'
                break;
            case WARNING:
                this.message = `[WARNING] ${message}`
                this.color = 'yellow'
                break;
            case SUCCESS:
                this.message = `[SUCCESS] ${message}`
                this.color = 'green'
                break;
            default:
                this.message = `[INFO] ${message}`
                this.color = 'blue'
        }
        console.log(colors[this.color](this.message));
    }

    csvWrite(record) {
        csvWriter.writeRecords(record)
            .then(() => {
                console.log('...Done');
            });
    }
}
