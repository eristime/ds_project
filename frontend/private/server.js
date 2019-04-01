'use strict';
const express = require('express');

const backendAPIAddress = (function(){
    if (process.env.BACKENDADDRESS) {
        return process.env.BACKENDADDRESS;
    } else {
        return 'http://127.0.0.1:8000';
    }
}());

const port = (function(){
    if (process.env.PORT) {
        return `${process.env.PORT}`;
    } else {
        return '8080';
    }
}());

console.log('backendAddress:', backendAPIAddress)


var app = express();
const path = require('path');
const buildPath = path.resolve(__dirname, '../build');

app.use(express.json()) 

app.use('/', express.static(buildPath));


require('./routes.js')(app, backendAPIAddress);  // add routes for client

app.listen(port, function () {
    console.log('Server is now running at ' + port);
});


// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(buildPath + '/index.html');
  });