// FS module
const fs = require('fs');

// Stream data from file, will be encoded correctly and no need for two string
const readStream = fs.createReadStream('./hello.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./blog4.txt');

readStream.on('data', (chunk) => {
    console.log('---- NEW CHUNK ----');
    console.log(chunk.toString());
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
})

// pipiing
readStream.pipe(writeStream);