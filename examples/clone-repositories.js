const path = require('path');
const shell = require('shelljs');
const fs = require('fs');
config = require('./helper/getExampleConfig');
const { repositories } = config(11);
const log = require('./helper/log');
const { messageTypes } = require('./const');
const { ERROR, WARNING, SUCCESS } = messageTypes;
const repositoriesDirectory = path.join(__dirname, 'Docs', 'my-repositories');
function cloneRepositories(repositoryPath, repositoryList = []) {
    if(!fs.existsSync(repositoriesDirectory)) {
        log('Directory NOT Found', WARNING);
        log(`Directory created -> ${repositoriesDirectory}`);
        fs.mkdirSync(repositoriesDirectory);
    } 

    const repositoryCount = repositoryList.length;

    if (!repositoryPath || repositoryCount === 0) {
        log('Invalid path or repository liist', ERRORS);
        return
    }

    log(`Cloning Repositories to: ${ repositoriesDirectory }`);

    shell.cd(repositoryPath);

    repositoryList.forEach((repositoryUrl, index) => {
        log(`Cloning ${ index +1 } of ${repositoryCount}`);
        shell.exec(`git clone ${repositoryUrl} --progress -b master`);
    });

    log('Completed cloning of repositories', SUCCESS);
}

cloneRepositories(repositoriesDirectory, repositories);