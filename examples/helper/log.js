require('colors');
const { messageTypes } = require('../const');
const { ERROR, WARNING, SUCCESS, INFO } = messageTypes;

module.exports = function log (message, type) {
    let colorMessage;
    
    switch(type) {
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
        colorMessage = `[INFO] ${message.cyan}`
    }
    console.log(colorMessage);
}