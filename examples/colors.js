const log = require('./helper/log');
const { messageTypes } = require('./const');
const { ERROR, WARNING, SUCCESS } = messageTypes;

log('This is a success message', SUCCESS);
log('This is a warning message', WARNING);
log('This is a error message', ERROR);
log('This is a info message');