const readlineSync = require('readline-sync');
const path = require('path');
const fse = require('fs-extra');
const { GAME_TEMPLATES } = require('../const');
const { SELECT_OPTIONS } = require('../const');
const { JSON_WHITESPACE, NO_CHOICE_MADE } = SELECT_OPTIONS;
const Logger = require('../helper/Logger');
const writer = new Logger();
const { messageTypes } = require('../const');
const { ERROR, WARNING, SUCCESS } = messageTypes;

console.log(GAME_TEMPLATES);
console.log(SELECT_OPTIONS);
const templatesDir = path.join(__dirname, GAME_TEMPLATES);
const templates = fse.readdirSync(templatesDir);

const index = readlineSync.keyInSelect(templates);

if (index === NO_CHOICE_MADE) {
    process.exit(0);
}

const projectName = readlineSync.question('What is the name of your game \n', {
    limit: input => input.trim().length > 0,
    limitMessage: 'The project has to have a name, try again. \n'
});

confirmCreateDirectory = readlineSync.keyInYN(`You entered '${projectName}', create directory with this name? \n`);

if (confirmCreateDirectory) {
    const template = templates[index];
    const src = path.join(templatesDir, template);
    const destination = path.join(templatesDir, projectName);

    fse.copy(src, destination).then(
        () => writer.consoleWrite(`Successfully created ${destination}`, SUCCESS))
        .catch(err => writer.consoleWrite(err, ERROR)); 
} else {
    writer.consoleWrite('Aborted creating a new game', WARNING);
}


