const shell = require('shelljs');
const logger = require('../helper/log');
const messageTypes = require('../const')
const { ERROR, WARNING, SUCCESS } = messageTypes;
let repository = require('../helper/getExampleConfig');
repository = repository(12);

const {delivery, baseBranch} = repository.repository;

logger(`Cloning ${delivery}`);

shell.cd(__dirname);
shell.exec(`git clone ${delivery} --progress`);