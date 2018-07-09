require('colors');
const Logger = require('../helper/Logger');
const writer = new Logger();
const path = require('path');
const { stdout } = require('process');
const parse = require('csv-parse');
const transform = require('stream-transform');
const fs = require('fs');

const DELAY_TIME = 1000;
const CSV_FILE = 'game-releases.csv';
const parser = parse({ delimiter: ',' });
const gamereleasesPath = path.join(__dirname, CSV_FILE);
const input = fs.createReadStream(gamereleasesPath);
let iterator = 1;

const processRecord = (record, callback) => {
    const [ game, template ] = record;
    let message = `Deploying game ${iterator} '${game}' with template: '${template}'`;
    message = (iterator %2 === 0) ? message.green : message.blue;
    iterator += 1;
    setTimeout(() => {
        callback(null, `${message} \n`)
    }, DELAY_TIME);
};

const transformer = transform(processRecord);

input
  .pipe(parser)
  .pipe(transformer)
  .pipe(stdout);