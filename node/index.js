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

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://ozrnetworks');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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
  res.json(usersOnline);
});

https.listen(apiPort, () => {
    console.log('API lives on ' + apiPort);
});

// app.listen(apiPort, () => {
//     console.log('API lives on ' + apiPort);
// });
