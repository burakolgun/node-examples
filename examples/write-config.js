const path = require('path');

const writeJson = require('./helper/write-json');
const getJiraData = require('./helper/getJiraData');

const args = process.argv.slice(2);
const [ticket] = args;

const CONFIG_FILE = 'config.js';
const jiraTicket = ticket || 'GS-1000';
const jiraData = getJiraData(jiraTicket);

if (jiraData === undefined) {
    console.log(`Jira ticket ${jiraTicket} not found`);
    process.exit(0);
}

const newConfigFile = path.join(__dirname, 'Docs', CONFIG_FILE);

writeJson(newConfigFile, jiraData).then(
    msg => console.log(msg)
).catch(
    (err) => { 
        throw err;
     }
);

