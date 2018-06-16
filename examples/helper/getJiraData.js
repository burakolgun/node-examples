const jiraData = require('../Docs/mock-jira-data.json');

const fetchDataFromJira = ticketNumber => jiraData[ticketNumber];

module.exports = fetchDataFromJira;