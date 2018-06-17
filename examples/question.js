const fs = require('fs');
const readline = require('readline');
const { stdin, stdout } = require('process');
const path = require('path');
const log = require('./helper/log');
const { messageTypes } = require('./const');
const { ERROR, SUCCESS } = messageTypes;

const interfaceInstance = readline.createInterface(stdin, stdout);

const onProjectInput = (name) => {
    interfaceInstance.close();
    stdin.destroy();
    createProjectDirectory(name);
};

interfaceInstance.question('What is the name of your project? \n', onProjectInput);

const createProjectDirectory = (enteredName) => {
    const name = enteredName.trim();
    if( name === '') {
        log('Cannot create a project without a name', ERROR);
        process.exit(0);
    }

    const projectPath = path.join(__dirname, 'Docs', name);
    
    if(fs.existsSync(projectPath)) {
        log(`${name} already exists`, ERROR);
        process.exit(0);
    }

    log(`Creating a new project called ${name}`, SUCCESS);
    fs.mkdirSync(projectPath);
}