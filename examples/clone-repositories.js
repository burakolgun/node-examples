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
        
        //Synchronously creates a directory. Returns undefined. This is the synchronous version of fs.mkdir().
        //https://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_mode
        if (fs.mkdirSync(repositoriesDirectory) === undefined) {
            log(`Directory created -> ${repositoriesDirectory}`);
        }
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