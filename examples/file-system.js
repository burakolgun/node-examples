const fs = require('fs');

const readJson = file => new Promise((resolve, reject) => {
    fs.readFile(file, {
        encoding: 'UTF-8'
    }, (err, data) => {
        if (err) {
            reject(err);
        }
        resolve(JSON.parse(data))
    });
});

readJson(`${__dirname}/Docs/example-config.json`)
.then((config) => {
    console.log(config.gameName);
}).catch((err) => {
    console.log(err);
});