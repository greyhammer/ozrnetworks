const express       = require('express');
const bodyParser    = require('body-parser');
const sh            = require('shelljs');


const app           = express();
const port          = 8080;

require('./app/routes')(app, sh);

app.listen(port, () => {
    console.log('We are live on ' + port);
});

