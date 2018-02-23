const express       = require('express');
const sh            = require('shelljs');
const app           = express();
const apiPort       = 8080;
const fs            = require('fs');

var privateKey = fs.readFileSync('/home/keith/privkey.pem');
var certificate = fs.readFileSync('/home/keith/fullchain.pem');
var credentials = {key: privateKey, cert: certificate};

var https = require('https').Server(credentials, app);
var io = require('socket.io')(https);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

require('./routes')(app, sh);

https.listen(apiPort, () => {
    console.log('API lives on ' + apiPort);
});

// app.listen(apiPort, () => {
//     console.log('API lives on ' + apiPort);
// });
