const queryString = require('querystring');

const apiHost = 'https://jira.my-company.com/rest/api/latest/search?jql=';

const jqlParams = {
    assignee: 'burak.olgun',
    startAt: 4,
    maxResults: 5
  };
  
const apiUrl = `${apiHost}"${queryString.stringify(jqlParams)}"`;

console.log(`My JQL api call is: ${apiUrl}`);
