const { WINDOWS_PLATFORM } = require('./const');
const { platform } =  require('os');

const { exec } = require('child_process');
const url = process.argv.slice(2);

if (url === undefined) {
    console.error('Please enter a  URL, e.g. "http://www.google.com"');
    process.exit(0);
}

let command;

if (platform === WINDOWS_PLATFORM) {
    command = `start microsoft-edge:${url}`;
}
 else {
     command = `open -a Google\\\ Chrome ${url}`;
 }

 console.log(`executing command: ${command}`);

 exec(command);