const shell = require('shelljs');
const readLineSync = require('readline-sync');
const path = require('path');
let repository = require('../helper/getExampleConfig');
repository = repository(12);

const {delivery, baseBranch, repoPath} = repository.repository;

const branchName = readLineSync.question('What is the Branch Name? \n', {
    limit: input => input.trim().length > 0,
    limitMessage: 'Please enter a Branc Name (e.g. MNT-123)'
});

shell.cd(repoPath);
shell.exec(`git checkout ${baseBranch}`);
shell.exec(`git fetch origin ${baseBranch}`);
shell.exec(`git reset --hard origin/${baseBranch}`);
shell.exec(`git pull --rebase origin ${baseBranch}`);
shell.exec(`git checkout -b ${branchName}`);
