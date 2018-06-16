const archiver = require('archiver');
const fs = require('fs');
const path = require('path');
const { ZLIP_BEST_COMPRESSION } = require('./const');
const zipPath = path.join(__dirname, 'Docs', 'files.zip');
const output = fs.createWriteStream(zipPath);
const textPath = path.join(__dirname, 'Docs', 'example-config.json');
const archive = archiver('zip', {
    zlib: { level: ZLIP_BEST_COMPRESSION }
});

output.on('close', () => {
    console.log(`Total bytes: ${archive.pointer()}`);
    console.log('Archiving has now finished.');
});

archive.on('error', (error) => {
    throw error;
});

archive.pipe(output);

archive.append(fs.createReadStream(textPath), {
    name: 'content.txt'
});

archive.finalize();


