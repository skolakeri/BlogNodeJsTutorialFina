// Importing Javascript
//const xyz = require('./people');
//deconstructing
const { people } = require('./people');


// Returning an empty object in xyz
// Just bc we import a file, doesnt mean you can access the data
//console.log(xyz.ages);

console.log(people);

// Importing operating system
const os = require('os');

console.log(os);

console.log(os.platform(), os.homedir());