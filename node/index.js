const express       = require('express');
const sh            = require('shelljs');
const app           = express();
const apiPort       = 8080;
const socketPort    = 3000;

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(socketPort, () => {
    console.log('Socket live on ' + socketPort);
});

require('./routes')(app, sh, io);

app.listen(apiPort, () => {
    console.log('API live on ' + apiPort);
});

