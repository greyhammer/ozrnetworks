const express       = require('express');
const sh            = require('shelljs');
const app           = express();
const apiPort       = 8080;

var http = require('http').Server(app);
var io = require('socket.io')(http);

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

http.listen(apiPort, () => {
    console.log('API lives on ' + apiPort);
});

// app.listen(apiPort, () => {
//     console.log('API lives on ' + apiPort);
// });
