const express       = require('express');
const sh            = require('shelljs');
const app           = express();
const apiPort       = 8080;
const fs            = require('fs');
var usersOnline     = 0;

var privateKey = fs.readFileSync('/home/keith/privkey.pem');
var certificate = fs.readFileSync('/home/keith/fullchain.pem');
var credentials = {key: privateKey, cert: certificate};

var https = require('https').Server(credentials, app);
var io = require('socket.io')(https);

io.on('connection', function(socket){
  console.log('a user connected');
  usersOnline ++;
  socket.on('disconnect', function(){
    console.log('user disconnected');
    usersOnline--;
  });
});

require('./routes')(app, sh);

app.get('/', function(req, res){
  res.send(usersOnline);
});

https.listen(apiPort, () => {
    console.log('API lives on ' + apiPort);
});

// app.listen(apiPort, () => {
//     console.log('API lives on ' + apiPort);
// });
