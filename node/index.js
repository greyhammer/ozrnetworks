const express       = require('express');
const sh            = require('shelljs');
const app           = express();
const apiPort       = 8080;

require('./routes')(app, sh);

app.listen(apiPort, () => {
    console.log('API lives on ' + apiPort);
});
