'use strict';
const express = require('express');
const port = 8080;

const backendAPIAddress = (function(){
    if (process.env.NODE_ENV === 'production') {
        return 'http://backend:80';
    } else {
        return 'http://127.0.0.1:8000';
    }
}());

console.log('backendAddress:', backendAPIAddress)


var app = express();

const path = require('path');
const buildPath = path.resolve(__dirname, '../build');
const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json());

app.use(express.json()) 

app.use('/', express.static(buildPath));


require('./routes.js')(app, backendAPIAddress);  // connect to client routes

app.listen(port, function () {
    console.log('Server is now running at ' + port);
});


// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(buildPath + '/index.html');
  });