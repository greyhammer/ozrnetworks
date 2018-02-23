module.exports = function(app, sh) {

    app.post('/deploy', (req, res) => {
        console.log('bitbucket web hook');
        sh.exec("/var/www/ozrnetworks.com/bash/deploy-ozrnetworks.sh");
        res.send('deploy post');
    });

};
