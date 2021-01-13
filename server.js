// use nmp install if package is missing. Will download the external
// libraries in the dependencies


const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // lodash
    // getting random number example
    const num = _.random(0,20);
    console.log(num);

    // load this only once
    const greet = _.once(() => {
        console.log('hello');
    })

    // Will execute once
    greet();
    greet();

    //console.log('requrest made');
    // Used to navigate pages
    //console.log(req.url);
    //console.log(req.method);

    // set header content type
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');

    // Get path user requrest
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            // Status code is ok
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            // Status code is ok
            res.statusCode = 200;
            break;
        case '/about-me':
            // redirect to about
            // Status code means resource trying to access has been moved
            res.statusCode = 301;
            res.setHeader('Location', 'about');
            res.end();
            break;
        default: 
            path += '404.html';
            // Status code is not ok
            res.statusCode = 404;
            break;
    }



    // Reading from the HTML file
    fs.readFile(path, (err, data) => {
        // if there is an error
        if (err) {
            console.log(err);
            res.end();
        } else {
            
            //res.write(data);
            res.end(data);
        }
    })

    // res.write('<head><link rel-"stylesheet" href="#"</head>')
    // //res.write('hello, ninjas');
    // res.write('<p>hello, ninjas</p>');
    // res.write('<p>hellow again, ninjas</p>');
    // res.end();
});
// Port number, and local host
server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})



// Local host is like a domain name on the web, that takes you too a 
// local ip address 127.0.0.1 pointing to own computer. your own computer 
// acts as a hosting server

// Port numbers are like 'doors' into a computer. Pick a port number that does 
// not clash to another port number
