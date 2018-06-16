const fs = require('fs');
const {JSON_WHITE_SPACE} = require('../const');

const writeJSon = (file, contents) => new Promise((resolve, reject) => {
    fs.writeFile(file, JSON.stringify(contents, null, JSON_WHITE_SPACE), (error) => {
        if (error) {
            reject(error)
        }

        resolve(`${file} written`);
    });
});

module.exports = writeJSon;