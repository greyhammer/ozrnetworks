const express       = require('express');
const sh            = require('shelljs');
const app           = express();
const port          = 8080;

require('./routes')(app, sh);

app.listen(port, () => {
    console.log('We are live on ' + port);
});

