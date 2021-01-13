const fs = require('fs');



// reading files, async method, onces its done fire second call back function
// fs.readFile('./hello.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('last line');

// returns a buffer, a package of data

// writing files

fs.writeFile('./hello.txt', 'hello world', () => {
    console.log('file was writter');
});
// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err)
        };
        console.log('folder deleted')
    })
}


// deleting files
if(fs.existsSync('.deleteme.txt')) {
    fs.unlink('./deleteme.txt', () => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}